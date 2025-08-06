import express from "express";
import { withAsync } from "../lib/withAsync";
import {
  createArticle,
  getArticleById,
  getArticleList,
} from "../controllers/articleController";

const articleRouter = express.Router();

articleRouter.post("/", withAsync(createArticle));
articleRouter.get("/", withAsync(getArticleList));
articleRouter.get("/:id", withAsync(getArticleById));

export default articleRouter;
