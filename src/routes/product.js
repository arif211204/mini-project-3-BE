const express = require("express");
const productControllers = require("../controller/product");
const isAdmin = require("../middlewares/adminValidator");
const uploadFile = require("../middlewares/multer");
const productMulter = require("../middlewares/multer");
const route = express.Router();

route.get("/", productControllers.getAllWithCategory);
route.get("/withcategory", productControllers.getProductWithCategory);
route.get("/search", productControllers.getProductByFilter);
route.get("/name-sorting", productControllers.getProductByNameSorting);
route.get("/price-sorting", productControllers.getProductsByPriceSorting);
route.get("/category-sorting", productControllers.getProductByCategorySorting);
route.get("/stock-sorting", productControllers.getProductByStockSorting);
//transaction
route.get("/find", productControllers.getProductSearch);
route.get("/:id", productControllers.getProductById);

route.patch(
  "/editcategoryproduct/:id",
  productControllers.editCategoryInProduct
);
route.post(
  "/",
  productMulter.productImageUploader().single("image"),
  productControllers.createProduct
);
route.patch(
  "/:id",
  productMulter.productImageUploader().single("image"),
  productControllers.editProduct
);
route.delete("/:id", productControllers.deleteProduct);

module.exports = route;
