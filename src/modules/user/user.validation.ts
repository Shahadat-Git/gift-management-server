import { z } from "zod";

const userValidationSchema = z.object({
  username: z.string({
    required_error: "Username Required",
    invalid_type_error: "User Name must be string",
  }),
  name: z.string({
    invalid_type_error: "Name must be string",
  }),
  email: z
    .string({
      invalid_type_error: "Email must be string",
    })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Password Required",
      invalid_type_error: "Password must be string",
    })
    .max(20, { message: "Password can not be more than 20 characters" }),
});

const userLoginValidationSchema = z.object({
  username: z.string({
    required_error: "Username Required",
    invalid_type_error: "User Name must be string",
  }),
  password: z
    .string({
      required_error: "Password Required",
      invalid_type_error: "Password must be string",
    })
    .max(20, { message: "Password can not be more than 20 characters" }),
});

export const UserValidation = {
  userValidationSchema,
  userLoginValidationSchema,
};
