"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "id" });
      Order.belongsTo(models.Product, { foreignKey: "id" });
    }
  }
  Order.init(
    {
      product_id: DataTypes.INTEGER,
      cashier_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      order_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
