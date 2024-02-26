import { TCoupon } from "./coupon.interface";
import { Coupon } from "./coupon.model";

//
const addCouponIntoDB = async (data: TCoupon) => {
  const result = await Coupon.create(data);

  return result;
};

export const couponServices = {
  addCouponIntoDB,
};
