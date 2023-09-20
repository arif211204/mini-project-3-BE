const express = require("express");
const transactionControllers = require("../controller/transaction");
const route = express.Router();

// route.get("/", transactionDetailControllers.getAll);
route.get("/", transactionControllers.getAll);
route.get("/total-sales", transactionControllers.getTotalSales);
route.get("/total-transaction", transactionControllers.getTransactionTotal);
route.get("/:id", transactionControllers.getProductByTransaction);

route.post("/create", transactionControllers.createTransaction);

module.exports = route;
