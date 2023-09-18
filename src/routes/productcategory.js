const express = require("express");
const productCategoryController = require("../controller/productcategory");
const route = express.Router();

route.get("/", productCategoryController.getAll);
route.post("/", productCategoryController.addCategoryProduct);
module.exports = route;
