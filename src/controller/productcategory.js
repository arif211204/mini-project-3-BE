const { Op, Model, where } = require("sequelize");
const db = require("../sequelize/models");

const productCategoryController = {
  getAll(req, res) {
    db.ProductCategory.findAll()
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
  async getCategoryByQuery(req, res) {
    try {
      const category_name = req.query;
      await db.ProductCategory.findAll({
        where: { category_name: { [Op.like]: category_name } },
        include: {
          model: db.Product,
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
  async addCategoryProduct(req, res) {
    const newCategory = req.body;

    const addCategory = await db.ProductCategory.create(newCategory);

    res.json({
      status: 200,
      message: "Berhasil menambahkan category product",
      addCategory,
    });
  },
};

module.exports = productCategoryController;
