const db = require("../sequelize/models");

const orderController = {
  async getOrderByDate(req, res) {
    try {
      db.Order.findAll()
        .then((result) => res.send(result))
        .catch((err) => res.send(err?.message));
    } catch (err) {
      res.send(err?.message);
    }
  },
};

module.exports = orderController;
