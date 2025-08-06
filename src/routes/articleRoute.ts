import express from "express";
import { withAsync } from "../lib/withAsync";
import {
  createArticle,
  getArticleList,
} from "../controllers/articleController";

const articleRouter = express.Router();

articleRouter.post("/", withAsync(createArticle));
articleRouter.get("/", withAsync(getArticleList));

export default articleRouter;
