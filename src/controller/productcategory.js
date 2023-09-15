const { Op, Model } = require("sequelize");
const db = require("../sequelize/models");

const productCategoryController = {
  async getCategoryByQuery(req, res) {
    try {
      const category_name = req.query;
      await db.ProductCategory.findAll({
        where: { category_name: { [Op.like]: category_name } },
        include: {
          model: db.Product,
          as: "Product",
          attributes: [
            "id",
            "image",
            "product_name",
            "description",
            "category_id",
            "price",
            "stock",
          ],
        },
      }).then((result) => res.send(result));
    } catch (err) {
      res.json({ status: 500, message: err?.message });
    }
  },
};

module.exports = productCategoryController;
