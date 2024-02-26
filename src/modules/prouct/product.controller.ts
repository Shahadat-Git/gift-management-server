import { RequestHandler } from "express";
import { productServices } from "./product.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const addProduct = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await productServices.addProductToDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product added successfully",
    data: result,
  });
});

const editProduct = catchAsync(async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await productServices.editProductToDB(data, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product edited successfully",
    data: result,
  });
});

const getProduct = catchAsync(async (req, res) => {
  const query = req.query;

  const result = await productServices.getProductsFromDB(query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrived successfully",
    data: result,
  });
});
const singleDelete = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productServices.singleDeleteFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});
const multipleDelete = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await productServices.multipleDeleteFromDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productServices.getSingleProductsFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrive successfully",
    data: result,
  });
});

const sellProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await productServices.sellProductIntoDB(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product sold successfully",
    data: result,
  });
});

export const ProductControllers = {
  addProduct,
  getProduct,
  singleDelete,
  getSingleProduct,
  editProduct,
  sellProduct,
  multipleDelete,
};
