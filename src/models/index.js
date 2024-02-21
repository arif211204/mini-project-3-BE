"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const db = {};

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;
const port = process.env.MYSQL_PORT;

const config = {
  database,
  username,
  password,
  host,
  port,
  dialect: 'mysql', 
};
const sequelize = new Sequelize(config);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Role = require("./role")(sequelize, Sequelize);
db.Product = require("./product")(sequelize, Sequelize);
db.Transaction = require("./transaction.js")(sequelize, Sequelize);
db.ProductCategory = require("./productcategory")(sequelize, Sequelize);
db.TransactionDetail = require("./transactiondetail")(sequelize, Sequelize);

db.User.associate(db);
db.Role.associate(db);
db.Product.associate(db);
db.Transaction.associate(db);
db.ProductCategory.associate(db);
db.TransactionDetail.associate(db);

module.exports = db;
