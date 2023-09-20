const db = require("../sequelize/models");

const transactionController = {
  async getAll(req, res) {
    try {
      const response = await db.Transaction.findAll();
      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error retrieving transactions");
    }
  },

  async getTotalSales(req, res) {
    try {
      const salesTotal = await db.Transaction.sum("total_price");
      res.json({ salesTotal });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error Fetching Transaction Total");
    }
  },
  async getTransactionTotal(req, res) {
    try {
      const transactionTotal = await db.Transaction.count();
      res.json({ transactionTotal });
    } catch (err) {
      console.log(err);
      res.status(500).send("Transaction Total Error");
    }
  },

  async getProductByTransaction(req, res) {
    try {
      const response = await db.Transaction.findByPk(req.params.id, {
        include: [
          { model: db.TransactionDetail, include: [{ model: db.Product }] },
        ],
      });

      return res.send(response);
    } catch (error) {
      res.send(error.message);
    }
  },

  async createTransaction(req, res) {
    let transaction;
    const t = await db.sequelize.transaction();

    try {
      const productsBought = req.body.products; // Array of Product

      // Step 2
      transaction = await db.Transaction.create(
        {
          total_price: 0, // calculate later
        },
        { transaction: t }
      );

      // Step 3
      const transactionDetails = [];
      for (const product of productsBought) {
        const productInfo = await db.Product.findByPk(product.id);

        if (!productInfo || !productInfo.price) {
          await t.rollback();
          return res.status(400).send("No products to create a transaction.");
        }

        // proteksi stock 0
        if (productInfo.stock < 1) {
          await t.rollback();
          return res
            .status(400)
            .send(`Product "${productInfo.product_name}" is out of stock.`);
        }

        const unitPrice = productInfo.price;

        const transactionDetail = await db.TransactionDetail.create(
          {
            transaction_id: transaction.id,
            product_id: product.id,
            quantity: product.quantity,
            unit_price: unitPrice,
          },
          { transaction: t }
        );

        transactionDetails.push(transactionDetail);

        // Step 4
        await db.Product.update(
          { stock: db.sequelize.literal(`stock - ${product.quantity}`) },
          { where: { id: product.id }, transaction: t }
        );
      }

      const totalProductSold = await db.TransactionDetail.findAll({
        where: { transaction_id: transaction.id },

        include: [{ model: db.Product, as: "product" }],

        include: [{ model: db.Product }],

        transaction: t,
      });

      const totalPrice = totalProductSold.reduce((total, productDetail) => {
        const unitPrice = productDetail.unit_price;
        const quantity = productDetail.quantity;
        return total + unitPrice * quantity;
      }, 0);

      await transaction.update({ total_price: totalPrice }, { transaction: t });

      await t.commit();

      return res.send({
        transaction: transaction,
        totalProductSold: totalProductSold,
        totalPrice: totalPrice,
      });
    } catch (error) {
      await t.rollback();
      res.send(error?.message);
    }
  },
};

module.exports = transactionController;
