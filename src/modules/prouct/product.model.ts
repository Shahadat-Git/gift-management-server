import mongoose, { Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    occasion: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productQuantity: {
      type: Number,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model<TProduct>("Product", productSchema);
