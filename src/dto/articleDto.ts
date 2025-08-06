import { Article } from "@prisma/client";

export class ArticleResponseDto {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(article: Article) {
    this.id = article.id;
    this.title = article.title;
    this.content = article.content;
    this.image = article.image;
    this.createdAt = article.createdAt;
    this.updatedAt = article.updatedAt;
  }
}
