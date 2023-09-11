const express = require("express");
const productControllers = require("../controller/product");
const isAdmin = require("../middlewares/adminValidator");
const route = express.Router();

route.get("/", productControllers.getAll);
route.get("/search", productControllers.getProductByFilter);
route.get("/name-sorting", productControllers.getProductByNameSorting);
route.get("/price-sorting", productControllers.getProductsByPriceSorting);
route.get("/:id", productControllers.getProductById);

route.post("/", isAdmin, productControllers.createProduct);
route.patch("/:id", isAdmin, productControllers.editProduct);
route.delete("/:id", isAdmin, productControllers.deleteProduct);

module.exports = route;
