import { CourierStatistics } from './courier';
import { Fleet } from './fleet';
import { PushMessageData } from './messages';
import { IuguCharge, IuguInvoice } from './payment/iugu';
import { LatLng, WithId } from './platform';

export type OrderStatus =
  | 'quote'
  | 'matching'
  | 'dispatching'
  | 'delivered'
  | 'canceled';

export type DispatchingState =
  | null
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
  title: {
    pt: string;
  };
}

export interface OrderCancellation {
  reason: OrderCancellationReason;
  comment?: string;
}

export type OrderRejectionType = 'refuse' | 'cancel';

export interface OrderRejectionReason {
  type: OrderRejectionType;
  title: {
    pt: string;
  };
}

export interface OrderRejection {
  reason: OrderRejectionReason;
  courierId: string;
  comment?: string;
}

// export interface ProblemDescription {
//   description: string;
// }

export interface OrderProblemSurvey {
  title: string;
  description?: string;
}

export interface Order {
  consumer: {
    id: string;
    name: string;
  };
  status: OrderStatus;
  cancellation?: OrderCancellation;
  createdOn: firebase.firestore.FieldValue;
  origin: Place;
  destination: Place;
  distance: number; // in meters
  duration: number; // in seconds
  routePolyline: string;
  payment?: {
    invoice: IuguInvoice;
    paymentMethodId: string;
    charge?: IuguCharge;
  };
  tip?: {
    value: number; // in cents;
    charge?: IuguCharge;
  };
  fare?: Fare;
  courier?: OrderCourier;
  rejectionHistory?: WithId<OrderRejection>[];
  dispatchingState?: DispatchingState;
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
