export type P2POrderStatus =
  | 'quote'
  | 'confirming'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type FoodOrderstatus =
  | 'quote'
  | 'confirming'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type OrderStatus = P2POrderStatus | FoodOrderstatus;
