const express = require("express");
const productCategoryController = require("../controller/productcategory");
const route = express.Router();

route.get("/", productCategoryController.getCategoryByQuery);

module.exports = route;
