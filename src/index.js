const express = require('express');
const {
  userRoutes,
  productRoutes,
  productcategoriyRoutes,
  transactionDetailRoutes,
  transactionRoutes,
} = require('./routes');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 2200;
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(express.json());
const db = require('./models');
app.use(cors());


console.log(pool);
app.get('/', (req, res) => {
  res.send('welcome to Mini Project 3 API');
});

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/static', express.static(`${__dirname}/public/images/product`));
app.use('/productcategories', productcategoriyRoutes);
app.use('/transactions', transactionRoutes);
app.use('/transactiondetails', transactionDetailRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT: 🚀${PORT}🚀`);

  // db.sequelize.sync({ alter: true });
});
app.use((req, res, next) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      return res.status(500).json({ error: 'Database connection error' });
    }

    // Attach the connection to the request for use in route handlers
    req.dbConnection = connection;
    next();
  });
});

// Handle releasing the database connection after handling the request
app.use((req, res, next) => {
  if (req.dbConnection) {
    req.dbConnection.release();
  }
  next();
});