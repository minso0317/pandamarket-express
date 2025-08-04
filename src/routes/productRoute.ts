import express from "express";
import { withAsync } from "../lib/withAsync";
import {
  createProduct,
  getProduct,
  getProductList,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/", withAsync(createProduct));
productRouter.get("/", withAsync(getProductList));
productRouter.get("/:id", withAsync(getProduct));

export default productRouter;
