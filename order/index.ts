import firebase from 'firebase';
import { OutsourceAccountType } from '..';
import { OrderConsumer } from './consumer';
import { OrderCourier } from './courier';
import { DispatchingState, DispatchingStatus } from './dispatching';
import { Fare } from './fare';
import { OrderItem } from './item';
import { Place } from './place';
import { OrderStatus } from './status';

export type OrderType = 'p2p' | 'food';

export interface OrderRoute {
  distance?: number; // in meters
  duration?: number; // in seconds
  polyline?: string;
  issue: string | null;
}

export type OrderStatusTimestamps = {
  [K in OrderStatus]?: firebase.firestore.FieldValue;
} & {
  /** @deprecated */
  dispatchingDeclined?: firebase.firestore.FieldValue;
  /** @deprecated */
  matchingEnded?: firebase.firestore.FieldValue;
};

export type OrderDispatchingStateTimestamps = {
  goingPickup?: firebase.firestore.FieldValue;
  arrivedPickup?: firebase.firestore.FieldValue;
  goingDestination?: firebase.firestore.FieldValue;
  arrivedDestination?: firebase.firestore.FieldValue;
};

export type OrderDispatchingTimestamps = Omit<
  {
    [K in DispatchingStatus]?: firebase.firestore.FieldValue;
  },
  'no-match'
> & {
  matchingEnded?: firebase.firestore.FieldValue;
} & OrderDispatchingStateTimestamps;

export interface Order {
  type: OrderType;
  status: OrderStatus;
  dispatchingStatus: DispatchingStatus;
  consumer: OrderConsumer;
  courier?: OrderCourier | null;
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
  dispatchingState?: DispatchingState;
  outsourcedBy?: OutsourceAccountType;
  // fare, tip & payment
  fare?: Fare;
  tip?: {
    value: number; // in cents;
    financialFee: number;
  };
  arrivals?: {
    origin?: {
      estimate?: firebase.firestore.FieldValue;
      arrival?: firebase.firestore.FieldValue;
    };
    destination?: {
      estimate?: firebase.firestore.FieldValue;
      arrival?: firebase.firestore.FieldValue;
      arrivalLimit?: firebase.firestore.FieldValue;
    };
  };
  issue?: string | null;
  flagged?: boolean;
  // metadata
  timestamps: OrderStatusTimestamps;
  dispatchingTimestamps: OrderDispatchingTimestamps;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  chargedOn?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  confirmedOn?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  declinedOn?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  dispatchingDeclinedOn?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  dispatchingStartedOn?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  matchingEndedOn?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  deliveredOn?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  canceledOn?: firebase.firestore.FieldValue;
}

export interface OrderChange {
  before: Partial<Order>;
  after: Partial<Order>;
  timestamp: firebase.firestore.FieldValue;
}

export interface OrderBusiness {
  id: string;
  name: string;
  cusine: string;
}
