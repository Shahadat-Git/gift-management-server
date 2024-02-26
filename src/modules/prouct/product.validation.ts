import { z } from "zod";
const productValidationSchema = z.object({
  brand: z.string({
    required_error: "Brand is Required",
    invalid_type_error: "Brand must be a string",
  }),
  category: z.string({
    required_error: "Category is Required",
    invalid_type_error: "Category must be a string",
  }),
  img: z.string({
    required_error: "Image URL is Required",
    invalid_type_error: "Image URL must be a string",
  }),
  material: z.string({
    required_error: "Material is Required",
    invalid_type_error: "Material must be a string",
  }),
  occasion: z.string({
    required_error: "Occasion is Required",
    invalid_type_error: "Occasion must be a string",
  }),
  productName: z.string({
    required_error: "Product Name is Required",
    invalid_type_error: "Product Name must be a string",
  }),
  productPrice: z.number({
    required_error: "Product Price is Required",
    invalid_type_error: "Product Price must be a number",
  }),
  productQuantity: z.number({
    required_error: "Product Quantity is Required",
    invalid_type_error: "Product Quantity must be a number",
  }),
  theme: z.string({
    required_error: "Theme is Required",
    invalid_type_error: "Theme must be a string",
  }),
});

export const UserValidation = {
  productValidationSchema,
};
