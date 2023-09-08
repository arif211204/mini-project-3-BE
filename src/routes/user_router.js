const express = require("express");
const userControllers = require("../controller/user");
const route = express.Router();

route.get("/", userControllers.getAll);

module.exports = route;
