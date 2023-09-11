const db = require("../models");

const userControllers = {
  getAll(req, res) {
    db.User.findAll()
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },

  async login(req, res) {
    const { email, password } = req.body;
    await db.User.findOne({
      where: {
        email,
        password,
      },
    })
      .then((result) => {
        if (!result) {
          throw new Error("wrong email/password");
        }
        delete result.dataValues.password;

        return res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(err?.message);
      });
  },
};

module.exports = userControllers;
