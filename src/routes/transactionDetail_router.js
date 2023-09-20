const express = require("express");
const transactionDetailControllers = require("../controller/transactionDetail");
const route = express.Router();

route.get("/", transactionDetailControllers.getAll);
// route.get("/bydate", transactionDetailControllers.getTransactionDetailsByDate);
route.get("/bydate", transactionDetailControllers.getTotalSoldProductsByCategoryByDate);
route.get("/total-sold", transactionDetailControllers.getTotalSoldProduct);
route.get(
  "/soldproductcategory",
  transactionDetailControllers.getTotalSoldProductsByCategory
);
route.get("/:id", transactionDetailControllers.getProductByTransactionDetail);

module.exports = route;
