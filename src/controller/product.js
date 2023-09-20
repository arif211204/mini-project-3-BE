const { Op } = require("sequelize");
const db = require("../sequelize/models");
const jwt = require("jsonwebtoken");

const productControllers = {
  // async getAll(req, res) {
  // getAll(req, res) {
  //   db.Product.findAll({
  //     order: [["updatedAt", "DESC"]],
  //   })
  //     .then((result) => {
  //       res.send(result);
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err?.message)}}
  async getAllWithCategory(req, res) {
    try {
      const { page, pageSize, category_id } = req.query;

      const offset = (page - 1) * pageSize;
      console.log(parseInt(offset), "ini offset");
      console.log(page, pageSize);
      const products = await db.Product.findAndCountAll({
        where: { category_id: category_id },
        limit: parseInt(pageSize),
        offset: offset,
      });
      const totalPages = Math.ceil(products.count / pageSize);
      res.json({
        status: 200,
        products: products.rows,
        count: products.count,
        totalPages,
      });
    } catch (err) {
      res.json({
        status: 500,
        message: err?.message,
      });
    }
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
    const { product_name, category_id, orderby, sortby, page, pageSize } =
      req.query;
    // console.log(req.query);
    const offset = (page - 1) * pageSize;
    const search = {
      product_name: {
        [db.Sequelize.Op.like]: `%${product_name}%`,
      },
    };

    if (category_id)
      search.category_id = {
        [db.Sequelize.Op.like]: `%${category_id}%`,
      };
    const sorting = {
      order: [["updatedAt", "DESC"]],
    };
    if (orderby && sortby) {
      console.log("hello");
      sorting.order = [[orderby, sortby]];
    }
    try {
      console.log(search);
      const product = await db.Product.findAndCountAll({
        where: {
          ...search,
        },
        ...sorting,
        limit: parseInt(pageSize),
        offset: offset,
      });
      const totalPages = Math.ceil(product.count / pageSize);
      //     const { product_name, category_id, page, pageSize } = req.query;
      //     const offset = (page - 1) * pageSize;

      //     try {
      //       let products = [];

      //       if (product_name) {
      //         products = await db.Product.findAll({
      //           where: {
      //             product_name: {
      //               [db.Sequelize.Op.like]: `%${product_name}%`,
      //             },
      //           },
      //           limit: parseInt(pageSize),
      //           offset: offset,
      //         });
      //       }

      //       if (category_id) {
      //         const categoryProducts = await db.Product.findAll({
      //           where: {
      //             category_id: {
      //               [db.Sequelize.Op.like]: `%${category_id}%`,
      //             },
      //           },

      //           limit: parseInt(pageSize),
      //           offset: offset,
      //         });
      //         products = [...products, ...categoryProducts];
      //       }
      res.status(200).json({
        status: 200,
        product: product.rows,
        count: product.count,
        totalPages,
      });
      //res.json(product);
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
  getProductByStockSorting(req, res) {
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
      if (token) {
        const dataToken = jwt.verify(token, process.env.jwt_secret);
        userId = dataToken.id;
      }
      // const productData = req.body;

      // if (req.file) {
      //   productData.image = req.file.filename;
      // }
      // productData.userid = userId;
      req.body.image = req.file.filename;

      const productCreation = await db.Product.create({ ...req.body });
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
      if (req.file) {
        req.body.image = req.file.filename;
      }
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
    // if (!token) {
    //   return res
    //     .status(401)
    //     .json({ message: `Harap Melakukan Login Terlebih Dahulu` });
    // }
    try {
      // const dataToken = jwt.verify(token, process.env.jwt_secret);
      // const existingProduct = await db.Product.destroy(id);
      const existingProduct = await db.Product.findByPk(id);
      if (!existingProduct) {
        return res
          .status(404)
          .json({ message: `Produk ID ${id} Tidak Ditemukan!` });
      }
      // if (existingProduct.userid !== dataToken.id) {
      //   return res
      //     .status(403)
      //     .json({ message: `Tidak Diizinkan: Kamu Bukan Administrator!` });
      // }
      await existingProduct.destroy();
      res.status(200).json({ message: `Produk ID ${id} Berhasil Dihapus!` });
    } catch (err) {
      console.log("Error deleting product:", err);
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
  async getProductWithCategory(req, res) {
    const { categoryid_product } = req.query;

    try {
      const categoryProduct = await db.Product.findAll({
        where: { category_id: categoryid_product },
        include: { model: db.ProductCategory, attributes: ["category_name"] },
      });

      res.json({ status: 200, product: categoryProduct });
    } catch (err) {
      res.json({ status: 500, message: err?.message });
    }
  },
  async editCategoryInProduct(req, res) {
    const { id } = req.params;
    const newCategory_id = req.body;

    try {
      const editProduct = await db.Product.findByPk(id);
      await editProduct
        .update({ ...newCategory_id })
        .then((result) => res.json({ status: 200, newProduct: result }))
        .catch((err) => res.json({ status: 500, message: err?.message }));
    } catch (err) {
      res.json({ status: 500, message: err?.message });
    }
  },
};

module.exports = productControllers;
