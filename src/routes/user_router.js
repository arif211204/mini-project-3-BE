const express = require("express");
const userControllers = require("../controller/user");
const route = express.Router();

route.get("/", userControllers.getAll);

route.post("/auth", userControllers.login);
route.post("/cashier", userControllers.newCashier);
route.post("/passwordValidation", userControllers.passwordValidation);

module.exports = route;
