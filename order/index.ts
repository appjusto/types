import {
  OrderDispatchingTimestamps,
  OrderStatusTimestamps,
  OutsourceAccountType,
} from '..';
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
      estimate?: FieldValue;
      arrival?: FieldValue;
    };
    destination?: {
      estimate?: FieldValue;
      arrival?: FieldValue;
      arrivalLimit?: FieldValue;
    };
  };
  issue?: string | null;
  flagged?: boolean;
  // metadata
  timestamps: OrderStatusTimestamps;
  dispatchingTimestamps: OrderDispatchingTimestamps;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
  /**
   * @deprecated
   */
  chargedOn?: FieldValue;
  /**
   * @deprecated
   */
  confirmedOn?: FieldValue;
  /**
   * @deprecated
   */
  declinedOn?: FieldValue;
  /**
   * @deprecated
   */
  dispatchingDeclinedOn?: FieldValue;
  /**
   * @deprecated
   */
  dispatchingStartedOn?: FieldValue;
  /**
   * @deprecated
   */
  matchingEndedOn?: FieldValue;
  /**
   * @deprecated
   */
  deliveredOn?: FieldValue;
  /**
   * @deprecated
   */
  canceledOn?: FieldValue;
}

export interface OrderChange {
  before: Partial<Order>;
  after: Partial<Order>;
  timestamp: FieldValue;
}

export interface OrderBusiness {
  id: string;
  name: string;
  cusine: string;
}
