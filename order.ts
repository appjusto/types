import { Fleet } from './fleet';
import { PushMessageData } from './messages';
import { LatLng, WithId } from './platform';

export type OrderStatus =
  | 'quote'
  | 'matching'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type DispatchingState =
  | 'going-pickup'
  | 'arrived-pickup'
  | 'going-destination'
  | 'arrived-destination';

export type PaymentStatus =
  | 'authorized_pending_capture'
  | 'captured'
  | 'refunded'
  | 'failed'
  | 'not_authorized';

export interface Fare {
  fleet: WithId<Fleet>;
  courierFee: number; // in cents
  courierTip: number; // in cents
  platformFee: number; // in cents
  taxes: number; // (percent as decimal; ex: for 2%, set 0.02)
  financialFee: number; // (percent as decimal; ex: for 2%, set 0.02)
  total: number; // in cents
}

export interface Address {
  main: string;
  secondary: string;
  description: string;
  googlePlaceId?: string;
}

export interface Place {
  address: Address;
  additionalInfo?: string;
  intructions?: string;
  location: LatLng;
}

export interface OrderRequest {
  origin: Place;
  destination: Place;
}

export interface Order {
  consumerId: string;
  status: OrderStatus;
  createdOn: firebase.firestore.FieldValue;
  origin: Place;
  destination: Place;
  distance: number; // in meters
  duration: number; // in seconds
  routePolyline: string;
  consumerName?: string;
  paymentStatus?: PaymentStatus;
  fare?: Fare;
  courierId?: string;
  courierName?: string;
  dispatchingState?: DispatchingState;
  updateOn?: firebase.firestore.FieldValue;
}

export interface ChatMessage {
  from: string;
  to: string;
  message: string;
  destination: 'consumers' | 'couriers';
  timestamp: firebase.firestore.Timestamp;
}

export interface OrderMatchPushMessageData extends PushMessageData {
  orderId: string;
  courierFee: number;
  distanceToOrigin: number;
  totalDistance: number;
  originAddress: string;
  destinationAddress: string;
}

export interface ChatPushMessageData extends PushMessageData {
  orderId: string;
}
