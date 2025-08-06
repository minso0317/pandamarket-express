import { Infer, nonempty, object, partial, string } from "superstruct";

export const createArticleBodyStruct = object({
  title: nonempty(string()),
  content: nonempty(string()),
  image: nonempty(string()),
});

export type CreateArticleType = Infer<typeof createArticleBodyStruct>;

export const updateArticleBodyStruct = partial(createArticleBodyStruct);

export type UpdateArticleType = Infer<typeof updateArticleBodyStruct>;
