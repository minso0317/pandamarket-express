import { Request, Response } from "express";
import * as productService from "../services/productService";
import { ProductResponseDto } from "../dto/productDto";
import { createProductBodyStruct } from "../structs/productStruct";
import { create } from "superstruct";

export async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  const data = create(req.body, createProductBodyStruct);
  const product = await productService.createProduct(data);

  res.status(201).json(new ProductResponseDto(product));
}

export async function getProductList(req: Request, res: Response) {
  const data = await productService.getProductList();
  res.status(200).json(data);
}
