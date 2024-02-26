import { Router } from "express";
import { couponControllers } from "./coupon.controller";

const router = Router();

// create coupon route
router.post("/create-coupon", couponControllers.createCoupon);

export const couponRoutes = router;
