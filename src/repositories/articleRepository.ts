import { Article } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { CreateArticleType, UpdateArticleType } from "../structs/articleStruct";

export async function createArticle(data: CreateArticleType): Promise<Article> {
  return prisma.article.create({
    data,
  });
}

export async function getArticleList(): Promise<Article[]> {
  return prisma.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getArticleById(id: number): Promise<Article | null> {
  return prisma.article.findUnique({
    where: { id },
  });
}

export async function updateArticle(
  id: number,
  data: UpdateArticleType
): Promise<Article> {
  return prisma.article.update({
    where: { id },
    data,
  });
}

export async function deleteArticle(id: number): Promise<void> {
  await prisma.article.delete({
    where: { id },
  });
}
