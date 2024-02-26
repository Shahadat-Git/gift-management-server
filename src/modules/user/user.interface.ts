import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type TUser = {
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export type TLoginUser = {
  username: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(plainTextPass: string, hashPass: string): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
