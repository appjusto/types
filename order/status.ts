export type P2POrderStatus =
  | 'quote'
  | 'confirming'
  | 'confirmed'
  | 'declined'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type FoodOrderStatus =
  | 'quote'
  | 'confirming'
  | 'declined'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type OrderStatus = P2POrderStatus | FoodOrderStatus;
