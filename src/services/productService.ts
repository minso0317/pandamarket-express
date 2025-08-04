import NotFoundError from "../lib/errors/NotFoundError";
import * as productRepository from "../repositories/productRepository";
import { CreateProductType, UpdateProductType } from "../structs/productStruct";

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

export async function updateProduct(id: number, data: UpdateProductType) {
  const product = await productRepository.getProduct(id);
  if (!product) {
    throw new NotFoundError("This dose not exist");
  }

  return await productRepository.updateProduct(id, data);
}

export async function deleteProduct(id: number) {
  const product = await productRepository.getProduct(id);
  if (!product) {
    throw new NotFoundError("This dose not exist");
  }

  return await productRepository.deleteProduct(id);
}
