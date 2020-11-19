export interface Category {
  name: string;
  restaurantId: string;
}

export interface Product {
  name: string;
  restaurantId: string;
  categoryId: string;
}