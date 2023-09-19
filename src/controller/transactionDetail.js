const db = require("../sequelize/models");

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
  async getTotalSoldProductsByCategory(req, res) {
    const { dateFrom, dateTo } = req.query;
    try {
      const totalSoldProductsByCategory = await db.sequelize.query(
        `
        SELECT
          pc.category_name,
          MAX(p.createdAt) as latest_created_at,
          SUM(td.quantity) as total_sold
        FROM
          TransactionDetails td
        JOIN
          Products p ON td.product_id = p.id
        JOIN
          ProductCategories pc ON p.category_id = pc.id
        WHERE
          p.createdAt >= :dateFrom AND p.createdAt <= :dateTo
        GROUP BY
          pc.category_name
        ORDER BY
          latest_created_at ASC; 
        `,
        {
          replacements: {
            dateFrom: dateFrom,
            dateTo: dateTo,
          },
          type: db.sequelize.QueryTypes.SELECT,
        }
      );

      res.json(totalSoldProductsByCategory);
    } catch (error) {
      console.error("Error fetching total sold products by category:", error);
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
};

module.exports = transactionDetailController;
