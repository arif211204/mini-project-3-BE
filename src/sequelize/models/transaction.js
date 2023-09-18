"use strict";
const { Model, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.hasMany(models.TransactionDetail, {
        foreignKey: "transaction_id",
      });
    }
  }

  let incrementCounter = 1;

  Transaction.init(
    {
      no_inv: {
        type: Sequelize.STRING(100),
        defaultValue: Sequelize.UUIDV4,
      },
      total_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );

  Transaction.beforeCreate((transaction, options) => {
    transaction.no_inv = `NO-INV-${incrementCounter++}-${uuidv4()}`;
  });
  return Transaction;
};
