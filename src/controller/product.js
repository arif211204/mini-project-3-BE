const { Op } = require("sequelize");
const db = require("../models");

const productControllers = {
  async getAllProduct(req, res) {
    await db.Product.findAll()
      .then((result) => res.status(200).send(result))
      .catch((err) => {
        throw new Error("Product not found");
      });
    try {
    } catch (err) {
      res.json({
        status: 500,
        message: err?.message,
      });
    }
  },

  async getProductByQuery(req, res) {
    const { category_name, product_name } = req.query;
    if (category) {
      const category = await db.ProductCategory.findOne({
        where: { category_name: { [Op.like]: `%${category_name}%` } },
      });
      console.log(category);
    }
  },
};

module.exports = productControllers;
