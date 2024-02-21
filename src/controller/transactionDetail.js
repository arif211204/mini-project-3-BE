const { Op } = require("sequelize");
const db = require("../models");

const transactionDetailController = {
  async getAll(req, res) {
    try {
      const response = await db.TransactionDetail.findAll();

      return res.status(200).send(response);
    } catch (err) {
      return res.status(500).send(err?.message);
    }
  },
  async getTotalSoldProduct(req, res) {
    try {
      const totalSoldProduct = await db.TransactionDetail.sum("quantity");
      res.json({ totalSoldProduct });
    } catch (err) {
      console.log(err);
      res.status();
    }
  },
  async getMostSoldProduct(req, res) {
    try {
      const mostSoldProduct = await db.sequelize.query(
        `
        SELECT
          p.id,
          p.product_name,
          SUM(td.quantity) as total_sold
        FROM
          TransactionDetails td
        JOIN
          Products p ON td.product_id = p.id
        GROUP BY
          p.id,
          p.product_name
        ORDER BY
          total_sold DESC
        `,
        {
          type: db.sequelize.QueryTypes.SELECT,
        }
      );
      res.json(mostSoldProduct);
    } catch (error) {
      console.error("Error fetching most sold product:", error);
      res.status(500).send(error.message);
    }
  },
  async getTotalSoldProductsByCategory(req, res) {
    try {
      const results = await db.sequelize.query(
        `
        SELECT
          pc.id,
          pc.category_name,
          SUM(td.quantity) as total_sold
        FROM
          TransactionDetails td
        JOIN
          Products p ON td.product_id = p.id
        JOIN
          ProductCategories pc ON p.category_id = pc.id
        GROUP BY
          pc.id,
          pc.category_name;
        `,
        {
          type: db.sequelize.QueryTypes.SELECT,
        }
      );

      res.json(results);
    } catch (error) {
      console.error("Error fetching total sold by category:", error);
      res.status(500).send(error.message);
    }
  },

  async getProductByTransactionDetail(req, res) {
    try {
      const response = await db.TransactionDetail.findByPk(req.params.id, {
        include: [
          {
            model: db.Product,
          },
        ],
      });

      return res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error?.message);
    }
  },

  async getTransactionDetailsByDate(req, res) {
    try {
      const { dateFrom, dateTo } = req.query;
      if (dateFrom && dateTo) {
        const transactionDetails = await db.TransactionDetail.findAll({
          where: {
            createdAt: {
              [Op.gte]: new Date(dateFrom + "T00:00:00Z"),
              [Op.lte]: new Date(dateTo + "T23:59:59Z"),
            },
          },
          include: [
            {
              model: db.Product,
              include: [
                {
                  model: db.ProductCategory,
                },
              ],
            },
          ],
        });
        return res.status(200).send(transactionDetails);
      } else {
        const transactionDetails = await db.TransactionDetail.findAll({
          where: {
            createdAt: {
              [Op.gte]: new Date(dateFrom + "T00:00:00Z"),
              [Op.lte]: new Date(dateFrom + "T23:59:59Z"),
            },
          },
          include: [
            {
              model: db.Product,
              include: [
                {
                  model: db.ProductCategory,
                },
              ],
            },
          ],
        });

        return res.status(200).send(transactionDetails);
      }
    } catch (error) {
      console.error("Error fetching transaction details by date:", error);
      res.status(500).send(error.message);
    }
  },
  async getTotalSoldProductsByCategoryByDate(req, res) {
    try {
      const { dateFrom, dateTo } = req.query;

      const transactions = await db.Transaction.findAll({
        where: {
          createdAt: {
            [Op.between]: [dateFrom + " 00:00:00", dateTo + " 23:59:59"],
          },
        },
        include: [
          {
            model: db.TransactionDetail,
            include: [
              {
                model: db.Product,
                include: [
                  {
                    model: db.ProductCategory,
                  },
                ],
              },
            ],
          },
        ],
      });

      const categories = {};

      transactions.forEach((transaction) => {
        transaction.TransactionDetails.forEach((transactionDetail) => {
          const category =
            transactionDetail.Product.ProductCategory.category_name;
          const quantity = transactionDetail.quantity;
          const price = transactionDetail.Product.price;

          if (!categories[category]) {
            categories[category] = {
              total_sold: 0,
              total_price: 0,
            };
          }

          categories[category].total_sold += quantity;
          categories[category].total_price += quantity * price;
        });
      });

      const categoryData = Object.keys(categories).map((category) => ({
        category_name: category,
        total_sold: categories[category].total_sold,
        total_price: categories[category].total_price,
      }));

      res.json(categoryData);
    } catch (error) {
      console.error(
        "Error fetching total sold products by category by date:",
        error
      );
      res.status(500).send(error.message);
    }
  },
};

module.exports = transactionDetailController;
