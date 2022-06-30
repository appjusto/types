import { FieldValue } from 'firebase/firestore';
import {
  OrderDispatchingTimestamps,
  OrderStatusTimestamps,
  OutsourceAccountType,
} from '..';

import { PayableWith } from '../payment/index';
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
  paymentMethod: PayableWith;
  fulfillment?: Fulfillment;
  preparationMode?: PreparationMode;
  status: OrderStatus;
  dispatchingStatus: DispatchingStatus;
  consumer: OrderConsumer;
  courier?: OrderCourier | null;
  business?: OrderBusiness | null;
  staff?: OrderStaff | null;
  items?: OrderItem[];
  additionalInfo?: string | null;
  code?: string;
  seq?: string | null;
  cookingTime?: number | null; // in seconds
  // places & route
  origin?: Place;
  destination?: Place | null;
  route?: OrderRoute | null;
  dispatchingState: DispatchingState | null;
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
      initialEstimate?: FieldValue;
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
}

export type Fulfillment = 'delivery' | 'take-away' | 'dine-in';
export type PreparationMode = 'realtime' | 'scheduled';

export interface OrderBusiness {
  id: string;
  name: string;
  cusine: string;
}

export interface OrderStaff {
  id: string;
  name?: string | null;
  email: string;
}
