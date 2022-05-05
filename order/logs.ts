import { FieldValue, GeoPoint } from 'firebase/firestore';
import { Order } from '.';
import { LatLng } from '../platform';
import { DispatchingState } from './dispatching';

export interface OrderChangeLog {
  type: 'change';
  timestamp: FieldValue;
  before: Partial<Order>;
  after: Partial<Order>;
}

export interface OrderPaymentLog {
  type: 'payment';
  timestamp: FieldValue;
  info: string[];
}

export interface OrderInfoLog {
  type: 'info';
  timestamp: FieldValue;
  info: string[];
}

export interface OrderMatchingLog {
  type: 'matching';
  timestamp: FieldValue;
  info: string[];
}

export interface OrderCourierLocationLog {
  type: 'courier-location';
  timestamp: FieldValue;
  location: LatLng;
  courierId: string;
}

/**
 * @deprecated
 */
export interface OrderLocationEntry {
  createdOn: FieldValue;
  coordinates: GeoPoint;
  dispatchingState: DispatchingState;
  courierId: string;
}

export type OrderLog =
  | OrderChangeLog
  | OrderInfoLog
  | OrderMatchingLog
  | OrderCourierLocationLog
  | OrderPaymentLog;
