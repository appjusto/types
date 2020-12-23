import { OrderType } from '.';
import { FoodItem, OrderBusiness } from './food';
import { Place } from './place';

export interface CreateOrderBasePayload {
  type: OrderType;
  origin: Place;
  destination: Place;
}

export interface CreateP2POrderPayload extends CreateOrderBasePayload {
  type: 'p2p';
}

export interface CreateFoodOrderPayload extends CreateOrderBasePayload {
  type: 'food';
  business: OrderBusiness;
  items: FoodItem[];
}

export type CreateOrderPayload = CreateP2POrderPayload | CreateFoodOrderPayload;

export interface PlaceOrderPayload {
  orderId: string;
  origin: Place;
  destination: Place;
  paymentMethodId: string;
  fleetId: string;
  platformFee: number;
  // transactionId: string;
}
