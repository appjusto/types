export interface OrderItem {
  product: {
    name: string;
    price: number; // in cents
    id?: string;
    externalId?: string;
  };
  quantity: number;
  notes?: string;
}

export interface FoodOrderItem extends OrderItem {
  stock?: boolean; // stock items are added up instead of being separated items
}
