"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.TransactionDetail, { foreignKey: "product_id" });

      Product.belongsTo(models.ProductCategory, { foreignKey: "category_id" });
    }
  }
  Product.init(
    {
      image: DataTypes.STRING(255),
      product_name: DataTypes.STRING(255),
      description: DataTypes.STRING(255),
      category_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
