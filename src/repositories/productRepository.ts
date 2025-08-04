import { prisma } from "../lib/prisma";
import { CreateProductType } from "../structs/productStruct";

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
