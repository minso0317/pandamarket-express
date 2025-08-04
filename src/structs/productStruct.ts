import {
  array,
  Infer,
  integer,
  min,
  nonempty,
  object,
  partial,
  string,
} from "superstruct";

export const createProductBodyStruct = object({
  name: nonempty(nonempty(string())),
  description: nonempty(string()),
  price: min(integer(), 0),
  tags: array(nonempty(string())),
  images: array(nonempty(string())),
});

export type CreateProductType = Infer<typeof createProductBodyStruct>;

export const updateProductBodyStruct = partial(createProductBodyStruct);

export type UpdateProductType = Infer<typeof updateProductBodyStruct>;
