import { Request, Response } from "express";
import * as articleService from "../services/articleService";
import {
  createArticleBodyStruct,
  updateArticleBodyStruct,
} from "../structs/articleStruct";
import { create } from "superstruct";
import { ArticleRepositoryDto } from "../dto/articleDto";
import { IdParamsStruct } from "../structs/commonStruct";

export async function createArticle(
  req: Request,
  res: Response
): Promise<void> {
  const data = create(req.body, createArticleBodyStruct);
  const article = await articleService.createArticle(data);
  res.status(201).json(new ArticleRepositoryDto(article));
}

export async function getArticleList(req: Request, res: Response) {
  const data = await articleService.getArticleList();

  res
    .status(200)
    .json(data.map((article) => new ArticleRepositoryDto(article)));
}

export async function getArticleById(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = create(req.params, IdParamsStruct);
  const article = await articleService.getArticleById(id);
  res.status(200).json(new ArticleRepositoryDto(article));
}

export async function updateArticle(req: Request, res: Response) {
  const { id } = create(req.params, IdParamsStruct);
  const data = create(req.body, updateArticleBodyStruct);
  const article = await articleService.updateArticle(id, data);

  res.status(200).json(new ArticleRepositoryDto(article));
}

export async function deleteArticle(req: Request, res: Response) {
  const { id } = create(req.params, IdParamsStruct);
  await articleService.deleteArticle(id);

  res.status(204).send();
}
