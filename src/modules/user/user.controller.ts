import { RequestHandler } from "express";
import { userServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// create user
const createUser = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await userServices.createUserToDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is Created successfully",
    data: result,
  });
});

// login user
const loginUser = catchAsync(async (req, res) => {
  const loginInfo = req.body;
  const result = await userServices.loginUser(loginInfo);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User login successful",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  loginUser,
};
