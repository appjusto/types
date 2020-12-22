import { BaseOrder } from '..';

export interface OrderBusiness {
  id: string;
  name: string;
  // venueId: string;
}

export interface FoodItem {
  id: string;
  externalId?: string;
  quantity: number;
  name?: string;
  price?: number; // in cents
  total?: number; // in cents
  comments?: string[];
  // subItems?: FoodItem[]; modifiers
}

export interface FoodOrder extends BaseOrder {
  type: 'food';
  business: OrderBusiness;
  items: FoodItem[];
}
