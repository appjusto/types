export type P2POrderStatus =
  | 'quote'
  | 'confirming'
  | 'confirmed'
  | 'delivered'
  | 'canceled';

export type FoodOrderStatus =
  | 'quote'
  | 'confirming'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'canceled';

export type OrderStatus = P2POrderStatus | FoodOrderStatus;
