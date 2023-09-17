const express = require("express");
const transactionController = require("../controller/transaction");
const route = express.Router();

route.get("/", transactionController.getTransactionByDateRange);

module.exports = route;
