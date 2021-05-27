import firebase from 'firebase';
import { OrderConsumer } from './consumer';
import { OrderCourier } from './courier';
import { DispatchingState, DispatchingStatus } from './dispatching';
import { Fare } from './fare';
import { Issue, OrderRejection } from './issues';
import { OrderItem } from './item';
import { Place } from './place';
import { OrderStatus } from './status';

export type OrderType = 'p2p' | 'food';

export interface OrderRoute {
  distance: number; // in meters
  duration: number; // in seconds
  polyline: string;
  issue: string | null;
}

export interface Order {
  type: OrderType;
  status: OrderStatus;
  consumer: OrderConsumer;
  courier?: OrderCourier;
  business?: OrderBusiness | null;
  items?: OrderItem[];
  additionalInfo?: string | null;
  code?: string;
  seq?: string | null;
  cookingTime?: number | null; // in seconds
  // places & route
  origin?: Place;
  destination?: Place | null;
  route?: OrderRoute | null;
  dispatchingStatus?: DispatchingStatus;
  dispatchingState?: DispatchingState;
  // fare, tip & payment
  fare?: Fare;
  tip?: {
    value: number; // in cents;
  };
  // ids of couriers who were notified of requests
  matching?: {
    task: string;
    attempt?: number;
    startAt?: firebase.firestore.FieldValue;
    couriersNotified?: string[];
  };
  cancellation?: {
    canceledBy: {
      id: string;
      name: string;
    };
    issue: Issue;
    comment?: string | null;
    timestamp: firebase.firestore.FieldValue;
  };
  // list of rejections
  rejectionHistory?: OrderRejection[];
  // metadata
  createdOn?: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}

export interface OrderChange {
  before: Partial<Order>;
  after: Partial<Order>;
  timestamp: firebase.firestore.FieldValue;
}

export interface OrderBusiness {
  id: string;
  name?: string;
  // venueId: string;
}
