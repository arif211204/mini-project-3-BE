"use strict";
const { Model } = require("sequelize");
const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    // ...
  }
  Transaction.init(
    {
      no_invoice: {
        type: Sequelize.UUID,
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

  // Sequelize hook to generate UUID using nanoid
  Transaction.beforeCreate((transaction, options) => {
    // Generate the UUID using nanoid
    transaction.no_invoice = "ENV_" + nanoid();
  });

  return Transaction;
};
