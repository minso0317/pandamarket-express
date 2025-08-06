import { Product } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { CreateProductType, UpdateProductType } from "../structs/productStruct";

export async function createProduct(data: CreateProductType): Promise<Product> {
  return prisma.product.create({
    data,
  });
}

export async function getProductList(): Promise<Product[]> {
  return prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProductById(id: number): Promise<Product | null> {
  return prisma.product.findUnique({
    where: { id },
  });
}

export async function updateProduct(
  id: number,
  data: UpdateProductType
): Promise<Product> {
  return prisma.product.update({
    where: { id },
    data,
  });
}

export async function deleteProduct(id: number): Promise<void> {
  await prisma.product.delete({
    where: { id },
  });
}
