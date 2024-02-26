import httpStatus from "http-status";
import { TLoginUser, TUser } from "./user.interface";
import { User } from "./user.model";
import AppError from "../../errors/AppError";
import config from "../../config";
import jwt from "jsonwebtoken";

// create user to db
const createUserToDB = async (payload: TUser) => {
  // const isExistUsername = await User.findOne({ username: payload.username });

  // const isExistEmail = await User.findOne({ username: payload.email });

  // if (isExistUsername) {
  //   throw new AppError(httpStatus.FORBIDDEN, "Username already exist");
  // }
  // if (isExistEmail) {
  //   throw new AppError(httpStatus.FORBIDDEN, "Email already exist");
  // }

  const result = await User.create(payload);
  const withoutPass = await User.findById(result._id).select("-password");
  return withoutPass;
};

// logi user
const loginUser = async (payload: TLoginUser) => {
  let users = await User.findOne({ username: payload.username }).select(
    "+password"
  );

  if (!users) {
    throw new AppError(httpStatus.NOT_FOUND, "This User was not found");
  }

  let user = users;

  if (!(await User.isPasswordMatched(payload.password, user.password))) {
    throw new AppError(httpStatus.FORBIDDEN, "Password do not match!");
  }

  user = await User.findOne({ username: payload.username }).select({
    password: 0,
    createdAt: 0,
    updatedAt: 0,
    passwordHistory: 0,
    __v: 0,
  });

  const jwtPayload = {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });

  return { user, token: accessToken };
};

export const userServices = {
  createUserToDB,
  loginUser,
};
