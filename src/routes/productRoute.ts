import express from "express";
import { withAsync } from "../lib/withAsync";
import {
  createProduct,
  getProductList,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/", withAsync(createProduct));
productRouter.get("/", withAsync(getProductList));

export default productRouter;
