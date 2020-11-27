export interface MenuConfig {
  categoriesOrder: string[];
  productsOrderByCategoryId: {
    [categoryId: string]: string[];
  }
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

