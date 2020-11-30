import { Order } from "./order";

export interface FoodItem {
  id: string;
  externalId?: string;
  quantity: number;
  name?: string;
  price?: number; // in cents
  total?: number; // in cents
  comments?: string[];
  subItems?: FoodItem[];
}

export interface FoodOrder extends Order {
  items: FoodItem[];
  business: {
    id: string;
    venueId: string;
  }
}