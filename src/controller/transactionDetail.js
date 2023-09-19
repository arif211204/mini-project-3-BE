const { Op } = require("sequelize");
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
      let query = `
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
          p.createdAt >= :dateFrom`;

      const replacements = {
        dateFrom: dateFrom,
      };

      if (dateTo) {
        query += ` AND p.createdAt <= :dateTo`;
        replacements.dateTo = dateTo;
      }

      query += `
        GROUP BY
          pc.category_name
        ORDER BY
          latest_created_at ASC;
      `;

      const totalSoldProductsByCategory = await db.sequelize.query(query, {
        replacements,
        type: db.sequelize.QueryTypes.SELECT,
      });

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

  async getTransactionDetailsByDate(req, res) {
    try {
      const { dateFrom, dateTo } = req.query;
      if (dateFrom && dateTo) {
        const transactionDetails = await db.TransactionDetail.findAll({
          where: {
            createdAt: {
              [Op.gte]: new Date(dateFrom + "T00:00:00Z"),
              [Op.lte]: new Date(dateTo + "T23:59:59Z"), // Gunakan dateTo sebagai tanggal batas atas
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
              [Op.lte]: new Date(dateFrom + "T23:59:59Z"), // Gunakan dateTo sebagai tanggal batas atas
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
};

module.exports = transactionDetailController;
