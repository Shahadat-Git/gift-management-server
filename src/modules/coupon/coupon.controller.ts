import catchAsync from "../../utils/catchAsync";
import { couponServices } from "./coupon.service";

// create coupon
const createCoupon = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await couponServices.addCouponIntoDB(data);

  res.status(200).json({
    success: true,
    message: "Coupon Successfully Created",
    data: result,
  });
});

// get coupon
const getCoupon = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const result = await couponServices.getCouponFromDB(id);

  res.status(200).json({
    success: true,
    message: "Coupon Successfully Fetched",
    data: result,
  });
});

export const couponControllers = {
  createCoupon,
  getCoupon,
};
