const db = require("../sequelize/models");

const transactionController = {
  async getTransactionByDateRange(req, res) {
    const { sortby } = req.query;

    const sorting = {
      order: [["transaction_date", "DESC"]],
    };
    if (sortby) {
      sorting.order = [["transaction_date", sortby]];
    }

    const transactions = await db.Transaction.findAll({
      ...sorting,
      include: [
        { model: db.User, attributes: ["first_name"] },
        { model: db.Product, attributes: ["product_name"] },
      ],
    });

    res.json({ status: 200, transactions });
  },
};

module.exports = transactionController;
