import { WithId } from './platform';

export type ProductsByCategory = { [categoryId: string]: string[] };

export interface MenuConfig {
  categoriesOrder: string[];
  productsOrderByCategoryId: ProductsByCategory;
}

export interface Category {
  name: string;
  enabled: boolean;
}

export interface Product {
  name: string;
  description?: string;
  image_url?: string;
  price: number;
  externalId?: string;
  enabled: boolean;
  pdv?: string;
  classifications: string[];
}

export interface CategoryWithProducts extends WithId<Category> {
  products: WithId<Product>[];
}
