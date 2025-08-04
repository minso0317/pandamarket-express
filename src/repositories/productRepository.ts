import { prisma } from "../lib/prisma";
import { CreateProductType, UpdateProductType } from "../structs/productStruct";

export async function createProduct(data: CreateProductType) {
  return await prisma.product.create({
    data,
  });
}

export async function getProductList() {
  return await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProduct(id: number) {
  return await prisma.product.findUnique({
    where: { id },
  });
}

export async function updateProduct(id: number, data: UpdateProductType) {
  return await prisma.product.update({
    where: { id },
    data,
  });
}

export async function deleteProduct(id: number) {
  return await prisma.product.delete({
    where: { id },
  });
}
