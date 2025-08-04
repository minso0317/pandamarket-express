import { Request, Response } from "express";
import * as productService from "../services/productService";
import { ProductResponseDto } from "../dto/productDto";
import {
  createProductBodyStruct,
  updateProductBodyStruct,
} from "../structs/productStruct";
import { create } from "superstruct";
import { IdParamsStruct } from "../structs/commonStruct";

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

  res.status(200).json(data.map((product) => new ProductResponseDto(product)));
}

export async function getProduct(req: Request, res: Response) {
  const { id } = create(req.params, IdParamsStruct);
  const product = await productService.getProduct(id);

  res.status(200).json(new ProductResponseDto(product));
}

export async function updateProduct(req: Request, res: Response) {
  const { id } = create(req.params, IdParamsStruct);
  const data = create(req.body, updateProductBodyStruct);
  const product = await productService.updateProduct(id, data);

  res.status(200).json(new ProductResponseDto(product));
}

export async function deleteProduct(req: Request, res: Response) {
  const { id } = create(req.params, IdParamsStruct);
  await productService.deleteProduct(id);

  res.status(204).send();
}
