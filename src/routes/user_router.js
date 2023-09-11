const express = require("express");
const userControllers = require("../controller/user");
const route = express.Router();

route.get("/", userControllers.getAll);

route.post("/auth", userControllers.login);

module.exports = route;
