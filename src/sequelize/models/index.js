"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

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
db.Order = require("./order")(sequelize, Sequelize);
db.Transaction = require("./transaction.js")(sequelize, Sequelize);
db.ProductCategory = require("./productcategory")(sequelize, Sequelize);
db.TransactionDetail = require("./transactiondetail")(sequelize, Sequelize);

db.User.associate(db);
db.Role.associate(db);
db.Product.associate(db);
db.Order.associate(db);
db.Transaction.associate(db);
db.ProductCategory.associate(db);
db.TransactionDetail.associate(db);

module.exports = db;
