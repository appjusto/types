export type P2POrderStatus =
  | 'quote'
  | 'confirming'
  | 'charged'
  | 'confirmed'
  | 'declined'
  | 'dispatching'
  | 'delivered'
  | 'canceled'
  | 'expired';

export type FoodOrderStatus =
  | 'quote'
  | 'confirming'
  | 'charged'
  | 'confirmed'
  | 'declined'
  | 'rejected'
  | 'scheduled'
  | 'preparing'
  | 'ready'
  | 'dispatching'
  | 'delivered'
  | 'canceled'
  | 'expired';

export type OrderStatus = P2POrderStatus | FoodOrderStatus;
