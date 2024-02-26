import { Schema, model } from "mongoose";
import { TCoupon } from "./coupon.interface";

const CouponModel = new Schema<TCoupon>({
  coupon: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
});

export const Coupon = model<TCoupon>("Coupon", CouponModel);
