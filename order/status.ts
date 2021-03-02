export type P2POrderStatus =
  | 'quote'
  | 'confirming'
  | 'unauthorized'
  | 'confirmed'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type FoodOrderStatus =
  | 'quote'
  | 'confirming'
  | 'unauthorized'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type OrderStatus = P2POrderStatus | FoodOrderStatus;
