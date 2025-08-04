import NotFoundError from "../lib/errors/NotFoundError";
import * as productRepository from "../repositories/productRepository";
import { CreateProductType } from "../structs/productStruct";

export async function createProduct(data: CreateProductType) {
  return await productRepository.createProduct(data);
}

export async function getProductList() {
  return await productRepository.getProductList();
}

export async function getProduct(id: number) {
  const product = await productRepository.getProduct(id);
  if (!product) {
    throw new NotFoundError("This dose not exist");
  }

  return product;
}
