const db = require("../models");

const userControllers = {
  getAll(req, res) {
    db.User.findAll()
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
};

module.exports = userControllers;
