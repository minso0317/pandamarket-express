import { Infer, nonempty, object, string } from "superstruct";

export const createArticleBodyStruct = object({
  title: nonempty(string()),
  content: nonempty(string()),
  image: nonempty(string()),
});

export type CreateArticleType = Infer<typeof createArticleBodyStruct>;
