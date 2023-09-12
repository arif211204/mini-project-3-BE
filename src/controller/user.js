const db = require("../sequelize/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
      },
    })
      .then(async (result) => {
        const isValid = await bcrypt.compare(
          password,
          result.dataValues.password
        );

        if (!isValid) {
          throw new Error("wrong password");
        }
        delete result.dataValues.password;

        const payload = {
          id: result.dataValues.id,
          role_id: result.dataValues.role_id,
        };

        const token = jwt.sign(payload, process.env.jwt_secret, {
          expiresIn: "1h",
        });

        return res.status(200).send({ token, user: result });
      })
      .catch((err) => {
        res.status(500).send(err?.message);
      });
  },
};

module.exports = userControllers;
