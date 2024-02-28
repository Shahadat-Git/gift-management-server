import { Schema, model } from "mongoose";
import { TSalesHistory } from "./history.interface";

const salesHistorySchema = new Schema<TSalesHistory>({
  productName: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  buyerName: {
    type: String,
  },
  seller: {
    type: String,
  },
  totalPrice: {
    type: Number,
  },
  finalPrice: {
    type: Number,
  },
  discount: {
    type: Number,

  },
  dateOfSelling: {
    type: String,
  },
  coupon: {
    type: String,
  },
});

export const SalesHistory = model<TSalesHistory>(
  "SalesHistory",
  salesHistorySchema
);
