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

  async newCashier(req, res) {
    try {
      const isCashierExist = await db.User.findOne({
        where: {
          email: { [db.Sequelize.Op.like]: `%${req.body.email}%` },
        },
      });

      if (isCashierExist?.dataValues?.id) {
        throw new Error("email sudah terdaftar");
      }

      req.body.password = await bcrypt.hash(req.body.password, 10);

      db.User.create({ ...req.body }).then((result) => {
        res.send({ message: "success", data: result });
      });
    } catch (error) {
      res.status(500).send(error?.message);
    }
  },

  async passwordValidation(req, res) {
    try {
      console.log(req.body);
      await db.User.findOne({
        where: {
          email: req.body.email,
        },
      })
        .then(async (result) => {
          const isValid = await bcrypt.compare(
            req.body.password,
            result.dataValues.password
          );

          if (!isValid) {
            throw new Error("wrong password");
          }
          delete result.dataValues.password;

          return res.status(200).send(result);
        })
        .catch((err) => {
          res.status(500).send(err?.message);
        });
    } catch (error) {
      res.status(500).send(error?.message);
    }
  },

  async getUserById(req, res) {
    try {
      const user = await db.User.findByPk(req.params.id);

      res.send(user);
    } catch (error) {
      console.log(error);
    }
  },

  async keepLogin(req, res) {
    try {
      const { token } = req;
      const payload = jwt.verify(token, process.env.jwt_secret);

      if (!payload?.id) throw new Error("invalid token");
      const user = await db.User.findByPk(payload.id);
      delete user.dataValues.password;

      const newToken = jwt.sign(
        {
          id: user.dataValues.id,
          role_id: user.dataValues.role_id,
        },
        process.env.jwt_secret,
        { expiresIn: "59min" }
      );

      return res.send({ token: newToken, user: user.dataValues });
    } catch (error) {
      res.status(400).send(error?.message);
    }
  },

  async getAllCashier(req, res) {
    try {
      const cashier = await db.User.findAll({
        where: {
          role_id: 2,
        },
      });
      res.send(cashier);
    } catch (error) {
      res.status(500).send(error?.message);
    }
  },

  async disableCashier(req, res) {
    try {
      const user = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(400).send({ error: "user not found" });
      }

      const isDisable = req.body.isDisable;
      console.log("isDisable", isDisable);

      // Update the user's isDisable column to true
      await user.update({
        isDisable: isDisable,
      });

      const message = isDisable
        ? "User Disabled Succesfully"
        : "User enabled succesfully";

      return res.status(200).send({ message });
    } catch (error) {
      return res.status(500).send(error?.message);
    }
  },

  async delete(req, res) {
    try {
      const response = await db.User.destroy({
        where: {
          email: req.params.email,
        },
      });

      if (!response) throw new Error("email not found!");
      return res.send({ message: "delete successfull" });
    } catch (error) {
      return res.status(500).send(error?.message);
    }
  },
};

module.exports = userControllers;
