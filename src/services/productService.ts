import { Prisma, Product } from "@prisma/client";
import NotFoundError from "../lib/errors/NotFoundError";
import * as productRepository from "../repositories/productRepository";
import { CreateProductType, UpdateProductType } from "../structs/productStruct";

export async function createProduct(data: CreateProductType): Promise<Product> {
  return await productRepository.createProduct(data);
}

export async function getProductList(): Promise<Product[]> {
  return await productRepository.getProductList();
}

export async function getProductById(id: number): Promise<Product> {
  const product = await productRepository.getProductById(id);
  if (!product) {
    throw new NotFoundError("Product not found");
  }

  return product;
}

export async function updateProduct(
  id: number,
  data: UpdateProductType
): Promise<Product> {
  try {
    return await productRepository.updateProduct(id, data);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      throw new NotFoundError("Product not found");
    }
    throw error;
  }
}

export async function deleteProduct(id: number): Promise<void> {
  try {
    return await productRepository.deleteProduct(id);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      throw new NotFoundError("Product not found");
    }
    throw error;
  }
}
