import { Article } from "@prisma/client";
import * as articleRepository from "../repositories/articleRepository";
import { CreateArticleType } from "../structs/articleStruct";
import NotFoundError from "../lib/errors/NotFoundError";

export async function createArticle(data: CreateArticleType): Promise<Article> {
  return await articleRepository.createArticle(data);
}

export async function getArticleList(): Promise<Article[]> {
  return await articleRepository.getArticleList();
}

export async function getArticleById(id: number): Promise<Article> {
  const article = await articleRepository.getArticleById(id);
  if (!article) {
    throw new NotFoundError("Article not found");
  }

  return article;
}
