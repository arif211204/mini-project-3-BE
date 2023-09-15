const db = require("../sequelize/models");
const jwt = require("jsonwebtoken");

const productControllers = {
  getAll(req, res) {
    db.Product.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(500).send(err?.message);
      });
  },
  getProductById(req, res) {
    const { id } = req.params;
    db.Product.findByPk(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(500).send(err?.message);
      });
  },
  async getProductByFilter(req, res) {
    const { product_name, category_id } = req.query;

    try {
      let products = [];

      if (product_name) {
        products = await db.Product.findAll({
          where: {
            product_name: {
              [db.Sequelize.Op.like]: `%${product_name}%`,
            },
          },
        });
      }

      if (category_id) {
        const categoryProducts = await db.Product.findAll({
          where: {
            category_id: {
              [db.Sequelize.Op.like]: `%${category_id}%`,
            },
          },
        });
        products = [...products, ...categoryProducts];
      }

      res.status(200).json(products);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error retrieving products.");
    }
  },

  //sorting
  getProductByNameSorting(req, res) {
    const { order } = req.query;
    let sortingOrder = "ASC";
    if (order === "desc") {
      sortingOrder = "DESC";
    }
    db.Product.findAll({
      order: [["product_name", sortingOrder]],
    })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
  getProductsByPriceSorting(req, res) {
    const { order } = req.query;
    let sortingOrder = "ASC";
    if (order === "desc") {
      sortingOrder = "DESC";
    }
    db.Product.findAll({
      order: [["price", sortingOrder]],
    })
      .then((result) => res.send(result))
      .catch((err) => {
        res.status(500).send(err?.message);
      });
  },
  getProductByCategorySorting(req, res) {
    const { order } = req.query;
    let sortingOrder = "ASC";
    if (order === "desc") {
      sortingOrder = "DESC";
    }
    db.Product.findAll({
      order: [["category_id", sortingOrder]],
    })
      .then((result) => res.send(result))
      .catch((err) => {
        res.status(500).send(err?.message);
      });
  },
  getProductByStockSorting(req,res) {
    const { order } = req.query;
    let sortingOrder = "ASC";
    if (order === "desc") {
      sortingOrder = "DESC";
    }
    db.Product.findAll({
      order: [["stock", sortingOrder]],
    })
      .then((result) => res.send(result))
      .catch((err) => {
        res.status(500).send(err?.message);
      });
  },

  async createProduct(req, res) {
    const { token } = req;

    // if (!token) {
    //   return res.status(401).send("Harap Melakukan Login Terlebih Dahulu!");
    // }
    try {
      let userId = null;
      if(token) {
      const dataToken = jwt.verify(token, process.env.jwt_secret);
      userId = dataToken.id
      }
      const productData = req.body;

      if (req.file) {
        productData.image = req.file.filename;
      }
      productData.userid = userId;

      const productCreation = await db.Product.create(productData);
      res.status(200).json({
        message: "Berhasil Membuat Produk!",
        productCreation,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err?.message);
    }
  },
  async editProduct(req, res) {
    const { id } = req.params;
    // const { token } = req;
    const productData = req.body;

    // if (!token) {
    //   return res
    //     .status(401)
    //     .json({ message: "Harap Melakukan Login Terlebih Dahulu!" });
    // }
    try {
      // const dataToken = jwt.verify(token, process.env.jwt_secret);
      const existingProduct = await db.Product.findByPk(id);

      if (!existingProduct) {
        return res.status(404).json({ message: `Produk Tidak Ditemukan!` });
      }
      // if (existingProduct.userid !== dataToken.id) {
      //   return res.status(403).json({
      //     message: `Tidak Diizinkan: Kamu Bukan Administrator!`,
      //   });
      // }
      await existingProduct.update({ ...productData });
      res.status(200).json({
        message: `Produk ID ${id} Berhasil di Edit`,
        updatedProduct: existingProduct,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err?.message);
    }
  },
  async deleteProduct(req, res) {
    const { id } = req.params;
    const { token } = req;

    if (!token) {
      return res
        .status(401)
        .json({ message: `Harap Melakukan Login Terlebih Dahulu` });
    }
    try {
      const dataToken = jwt.verify(token, process.env.jwt_secret);
      const existingProduct = await db.Product.destroy(id);
      if (!existingProduct) {
        return res
          .status(404)
          .json({ message: `Produk ID ${id} Tidak Ditemukan!` });
      }
      if (existingProduct.userid !== dataToken.id) {
        return res
          .status(403)
          .json({ message: `Tidak Diizinkan: Kamu Bukan Administrator!` });
      }
      await existingProduct.destroy();
      res.status(200).json({ message: `Produk ID ${id} Berhasil Dihapus!` });
    } catch (err) {
      console.log(err);
      res.status(500).send(err?.message);
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
