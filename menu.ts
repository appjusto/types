import { WithId } from './platform';

export type ProductsByCategory = { [categoryId: string]: string[] };

export interface MenuConfig {
  categoriesOrder: string[];
  productsOrderByCategoryId: ProductsByCategory;
}

export interface Category {
  name: string;
  enabled: boolean;
  // transient
  items?: WithId<Product>[];
}

export interface Product {
  name: string;
  description?: string;
  image_url?: string;
  price: number;
  externalId?: string;
  enabled: boolean;
  classifications: string[];
  complementsEnabled?: boolean;
  complementsOrder?: MenuConfig;
}

export interface ComplementGroup {
  name: string;
  required: boolean;
  minimum: number;
  maximum: number;
  // transient
  items?: WithId<Complement>[];
}

export interface Complement {
  name: string;
  description?: string;
  price: number;
  externalId?: string;
}
