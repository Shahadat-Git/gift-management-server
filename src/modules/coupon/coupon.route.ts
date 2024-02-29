import { Router } from "express";
import { couponControllers } from "./coupon.controller";
import auth from "../../middlewares/auth";

const router = Router();

// create coupon route
router.post("/create-coupon", auth("manager"), couponControllers.createCoupon);

// get all coupon
router.get("/coupons", auth("manager"), couponControllers.getAllCoupons);

// get coupon
router.get("/coupon/:id", couponControllers.getCoupon);

export const couponRoutes = router;
