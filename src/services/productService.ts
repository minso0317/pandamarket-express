import * as productRepository from "../repositories/productRepository";
import { CreateProductType } from "../structs/productStruct";

export async function createProduct(data: CreateProductType) {
  return await productRepository.createProduct(data);
}

export async function getProductList() {
  return await productRepository.getProductList();
}
