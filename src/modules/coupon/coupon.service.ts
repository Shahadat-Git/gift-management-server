import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCoupon } from "./coupon.interface";
import { Coupon } from "./coupon.model";

// create copon into db
const addCouponIntoDB = async (data: TCoupon) => {
  const result = await Coupon.create(data);

  return result;
};

// get copon from db
const getCouponFromDB = async (id: string) => {
  const result = await Coupon.findOne({ coupon: id });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Coupon not found!");
  }
  return result;
};

export const couponServices = {
  addCouponIntoDB,
  getCouponFromDB,
};
