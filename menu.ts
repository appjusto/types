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
  price?: number;
  externalId?: string;
  enabled: boolean;
}

