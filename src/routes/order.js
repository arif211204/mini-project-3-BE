const express = require("express");
const orderController = require("../controller/order");
const route = express.Router();

route.get("/", orderController.getOrderByDate);

module.exports = route;
