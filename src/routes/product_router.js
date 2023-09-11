const express = require("express");
const productControllers = require("../controller/product");
const route = express.Router();

route.get("/", productControllers.getAllProduct.bind(productControllers));

module.exports = route;
