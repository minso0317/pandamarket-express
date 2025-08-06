import express from "express";
import { withAsync } from "../lib/withAsync";
import {
  createArticle,
  deleteArticle,
  getArticleById,
  getArticleList,
  updateArticle,
} from "../controllers/articleController";

const articleRouter = express.Router();

articleRouter.post("/", withAsync(createArticle));
articleRouter.get("/", withAsync(getArticleList));
articleRouter.get("/:id", withAsync(getArticleById));
articleRouter.patch("/:id", withAsync(updateArticle));
articleRouter.delete("/:id", withAsync(deleteArticle));

export default articleRouter;
