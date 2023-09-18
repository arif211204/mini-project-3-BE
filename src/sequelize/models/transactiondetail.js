"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransactionDetail extends Model {
    static associate(models) {
      TransactionDetail.belongsTo(models.Transaction, {
        foreignKey: "transaction_id",
      });
      TransactionDetail.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });
    }
  }
  TransactionDetail.init(
    {
      transaction_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      unit_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "TransactionDetail",
    }
  );
  return TransactionDetail;
};
