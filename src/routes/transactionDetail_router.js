const express = require("express");
const transactionDetailControllers = require("../controller/transactionDetail");
const route = express.Router();

route.get("/:id", transactionDetailControllers.getProductByTransactionDetail);
route.get("/", transactionDetailControllers.getAll);

module.exports = route;
