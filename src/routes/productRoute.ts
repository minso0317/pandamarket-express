import express from "express";
import { withAsync } from "../lib/withAsync";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProductList,
  updateProduct,
} from "../controllers/productController";

const productRouter = express.Router();

productRouter.post("/", withAsync(createProduct));
productRouter.get("/", withAsync(getProductList));
productRouter.get("/:id", withAsync(getProductById));
productRouter.patch("/:id", withAsync(updateProduct));
productRouter.delete("/:id", withAsync(deleteProduct));

export default productRouter;
