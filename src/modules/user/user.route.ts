import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";

const router = express.Router();

// create user route
router.post(
  "/create-user",
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser
);

// login user route
router.post(
  "/login",
  validateRequest(UserValidation.userLoginValidationSchema),
  UserControllers.loginUser
);

export const userRoutes = router;
