const express = require("express");
const userControllers = require("../controller/user");
const route = express.Router();

route.get("/", userControllers.getAll);

route.post("/auth", userControllers.login);
route.post("/cashier", userControllers.newCashier);
route.post("/passwordValidation", userControllers.passwordValidation);
route.post("/token", userControllers.keepLogin);

route.get("/cashier", userControllers.getAllCashier);
route.get("/:id", userControllers.getUserById);

route.patch("/disable", userControllers.disableCashier);
route.patch("/changePassword/:email", userControllers.changePasswordCashier);

route.delete("/delete/:email", userControllers.delete);

module.exports = route;
