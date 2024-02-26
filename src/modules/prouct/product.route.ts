import express from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./product.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

// add product
router.post(
  "/add-product",
  auth("manager"),
  validateRequest(UserValidation.productValidationSchema),
  ProductControllers.addProduct
);

// edit product
router.put(
  "/edit-product/:id",
  auth("manager"),
  validateRequest(UserValidation.productValidationSchema),
  ProductControllers.editProduct
);

// get product
router.get(
  "/get-products",
  auth("seller", "manager"),
  ProductControllers.getProduct
);

// delete single product
router.delete(
  "/single-delete/:id",
  auth("manager"),
  ProductControllers.singleDelete
);

// delete multiple product
router.delete(
  "/multiple-delete",
  auth("manager"),
  ProductControllers.multipleDelete
);

// get single product
router.get(
  "/get-product/:id",
  auth("seller", "manager"),
  ProductControllers.getSingleProduct
);

// sell product
router.post("/sell/:id", auth("seller"), ProductControllers.sellProduct);

export const productRoutes = router;
