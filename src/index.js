const express = require("express");
const {
  userRoutes,
  productRoutes,
  productcategoriyRoutes,
  orderRoutes,
  transactionDetailRoutes,
  transactionRoutes,
} = require("./routes");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 2200;

app.use(express.json());
const db = require("./sequelize/models");
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to Mini Project 3 API");
});

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/static", express.static(`${__dirname}/public/images/product`));
app.use("/productcategories", productcategoriyRoutes);
app.use("/orders", orderRoutes);
app.use("/transactions", transactionRoutes);
app.use("/transactiondetails", transactionDetailRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT: 🚀${PORT}🚀`);

  // db.sequelize.sync({ alter: true });
});
