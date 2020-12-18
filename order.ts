import { CourierStatistics } from './courier';
import { Fleet } from './fleet';
import { PushMessageData } from './messages';
import { IuguCharge, IuguInvoice } from './payment/iugu';
import { LatLng, WithId } from './platform';
import { Review } from './reviews';

export type OrderStatus =
  | 'quote'
  | 'confirming'
  | 'preparing'
  | 'ready'
  | 'dispatching'
  | 'delivered'
  | 'canceled';
  
  export type DispatchingState =
  | null
  | 'matching'
  | 'unmatched'
  | 'going-pickup'
  | 'arrived-pickup'
  | 'going-destination'
  | 'arrived-destination';

// export type PaymentStatus =
//   | 'authorized_pending_capture'
//   | 'captured'
//   | 'refunded'
//   | 'failed'
//   | 'not_authorized';

export interface Fare {
  fleet: WithId<Fleet>;
  courierFee: number; // in cents
  platformFee: number; // in cents
  taxes: number; // (percent as decimal; ex: for 2%, set 2.0)
  financialFee: number; // (percent as decimal; ex: for 2.31%, set 2.31)
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

export interface OrderCourier {
  id: string;
  name: string;
  location: LatLng;
  joined: firebase.firestore.FieldValue;
  statistics?: CourierStatistics;
}

export interface OrderCancellationReason {
  title: string;
}

export interface OrderCancellation {
  reason: WithId<OrderCancellationReason>;
  comment?: string;
}

export type OrderRejectionType = 'refuse' | 'cancel';

export type IssueType =
  | 'courier-refuse'
  | 'courier-cancel'
  | 'courier-delivery-problem'
  | 'consumer-cancel'
  | 'consumer-delivery-problem';

export interface OrderRejectionReason {
  type: OrderRejectionType;
  title: string;
}

export interface OrderRejection {
  reason: OrderRejectionReason;
  courierId: string;
  comment?: string;
}

export interface OrderProblemReason {
  title: string;
}

export interface OrderProblemSurvey {
  reason: OrderProblemReason;
  comment?: string;
}

export interface CourierProblemReason {
  title: string;
}

export interface CourierProblemSurvey {
  reason: CourierProblemReason;
  comment?: string;
}

export type OrderType = 'p2p' | 'food';

export interface Order {
  consumer: {
    id: string;
    name: string;
  };
  type?: OrderType;
  status: OrderStatus;
  dispatchingState?: DispatchingState;
  origin: Place;
  destination: Place;
  distance: number; // in meters
  duration: number; // in seconds
  routePolyline: string;
  fare?: Fare;
  tip?: {
    value: number; // in cents;
    charge?: IuguCharge;
  };
  payment?: {
    invoice: IuguInvoice;
    paymentMethodId: string;
    charge?: IuguCharge;
  };
  courier?: OrderCourier;
  // issues, reviews, etc.
  rejectionHistory?: WithId<OrderRejection>[];
  cancellation?: OrderCancellation;
  problem?: OrderProblemSurvey;
  courierReview?: Review;
  courierProblem?: CourierProblemReason;
  // metadata
  createdOn: firebase.firestore.FieldValue;
  updateOn?: firebase.firestore.FieldValue;
}

export interface OrderLocationEntry {
  createdOn: firebase.firestore.FieldValue;
  coordinates: firebase.firestore.GeoPoint;
  dispatchingState: DispatchingState;
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
