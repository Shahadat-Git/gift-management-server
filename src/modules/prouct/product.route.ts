import express from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./product.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

// add product
router.post(
  "/add-product",
  auth("administrator"),
  validateRequest(UserValidation.productValidationSchema),
  ProductControllers.addProduct
);

// edit product
router.put(
  "/edit-product/:id",
  auth("administrator"),
  validateRequest(UserValidation.productValidationSchema),
  ProductControllers.editProduct
);

// get product
router.get(
  "/get-products",
  auth("administrator"),
  ProductControllers.getProduct
);

// delete single product
router.delete(
  "/single-delete/:id",
  auth("administrator"),
  ProductControllers.singleDelete
);

// delete multiple product
router.delete(
  "/multiple-delete",
  auth("administrator"),
  ProductControllers.multipleDelete
);

// get single product
router.get(
  "/get-product/:id",
  auth("administrator"),
  ProductControllers.getSingleProduct
);

// sell product
router.post("/sell/:id", auth("administrator"), ProductControllers.sellProduct);

export const productRoutes = router;
