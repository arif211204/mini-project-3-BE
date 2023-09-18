const express = require("express");
const productCategoryController = require("../controller/productcategory");
const route = express.Router();

route.get("/", productCategoryController.getAll);
route.post("/", productCategoryController.addCategoryProduct);
route.patch("/:id", productCategoryController.editCategory);
module.exports = route;
