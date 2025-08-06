import { Article } from "@prisma/client";
import * as articleRepository from "../repositories/articleRepository";
import { CreateArticleType } from "../structs/articleStruct";

export async function createArticle(data: CreateArticleType): Promise<Article> {
  return await articleRepository.createArticle(data);
}

export async function getArticleList(): Promise<Article[]> {
  return await articleRepository.getArticleList();
}
