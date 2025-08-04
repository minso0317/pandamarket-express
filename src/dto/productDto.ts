import { Product } from "@prisma/client";

export class ProductResponseDto {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.tags = product.tags;
    this.images = product.images;
    this.createdAt = product.createdAt;
    this.updatedAt = product.updatedAt;
  }
}
