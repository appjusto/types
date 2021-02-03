export type P2POrderStatus =
  | 'quote'
  | 'ready'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type FoodOrderStatus =
  | 'quote'
  | 'confirming'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type OrderStatus = P2POrderStatus | FoodOrderStatus;
