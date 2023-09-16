"use strict";
const { Model, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.User, { foreignKey: "cashier_id" });
      Transaction.belongsTo(models.Product, { foreignKey: "product_id" });
    }
  }

  Transaction.init(
    {
      no_inv: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: false,
      },
      cashier_id: DataTypes.INTEGER,
      customer_name: DataTypes.STRING,
      product_id: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      transaction_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );

  Transaction.beforeCreate((transaction, options) => {
    transaction.no_inv = "NO-INV" + uuidv4();
  });
  return Transaction;
};
