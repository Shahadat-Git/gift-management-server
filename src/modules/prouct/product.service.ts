import httpStatus from "http-status";
import AppError from "../../errors/AppError";

import { TFilter, TProduct, TQuery } from "./product.interface";
import { Product } from "./product.model";
import { TSalesHistory } from "../history/history.interface";
import { SalesHistory } from "../history/history.model";

const addProductToDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const editProductToDB = async (payload: TProduct, id: string) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const getProductsFromDB = async (query: TQuery) => {
  const { minPrice, maxPrice, brand, category, material, occasion, theme } =
    query;

  let filter: TFilter = {};

  // Filter by price
  if (minPrice || maxPrice) {
    filter.productPrice = {
      ...(minPrice && { $gte: minPrice }),
      ...(maxPrice && { $lte: maxPrice }),
    };
  }

  // Filter by brand, category, material, occasion, theme
  if (brand) {
    filter.brand = brand;
  }
  if (category) {
    filter.category = category;
  }
  if (material) {
    filter.material = material;
  }
  if (occasion) {
    filter.occasion = occasion;
  }
  if (theme) {
    filter.theme = theme;
  }

  let queryBuilder = Product.find(filter);

  const result = await queryBuilder;

  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No products found");
  }

  return result;
};

const singleDeleteFromDB = async (id: string) => {
  const product = await Product.findById(id);
  if (product) {
    const result = await Product.findByIdAndDelete(id);
    return result;
  } else {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found!");
  }
};

const multipleDeleteFromDB = async (data: string[]) => {
  const filter = {
    _id: {
      $in: data,
    },
  };
  const result = await Product.deleteMany(filter);
  return result;
};

const getSingleProductsFromDB = async (id: string) => {
  const product = await Product.findById(id);
  if (product) {
    const result = await Product.findById(id);
    return result;
  } else {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found!");
  }
};

const sellProductIntoDB = async (
  id: string,
  data: {
    buyerName: string;
    date: string;
    quantity: number;
    seller: string;
    coupon?: string | null;
    discount?: number;
  }
) => {
  const { buyerName, date, quantity, coupon = null, discount = 0, seller } = data;

  // find the product
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  // check if the quantity is available
  if (quantity > product?.productQuantity) {
    throw new AppError(httpStatus.BAD_REQUEST, "Don't have enough quantity");
  }

  // update the quantity
  const updatedQuantity = Number(product?.productQuantity) - Number(quantity);
  product.productQuantity = updatedQuantity;

  // update the product
  const updatedProduct = await Product.findByIdAndUpdate(id, product, {
    new: true,
    runValidators: true,
  });

  const sellingInfo: TSalesHistory = {
    productName: product.productName,
    quantity: quantity,
    buyerName: buyerName,
    seller: seller,
    totalPrice: Number(product.productPrice) * Number(quantity),
    dateOfSelling: date,
    discount: discount,
    finalPrice: ((Number(product.productPrice) * Number(quantity)) - discount)<0 ? 0 : (Number(product.productPrice) * Number(quantity)) - discount ,
    coupon: coupon,
  };

  // save selling history into db
  if (updatedProduct) {
    await SalesHistory.create(sellingInfo);
  }

  // delete product if quantity is 0
  if (product?.productQuantity === 0) {
    await Product.findByIdAndDelete(id);
    return;
  }

  return updatedProduct;
};

export const productServices = {
  addProductToDB,
  getProductsFromDB,
  singleDeleteFromDB,
  getSingleProductsFromDB,
  editProductToDB,
  sellProductIntoDB,
  multipleDeleteFromDB,
};
