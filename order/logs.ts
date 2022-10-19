import { Order, OrderStaff } from '.';
import { GeoPoint, Timestamp } from '../external/firebase';
import { LatLng } from '../platform';
import { DispatchingState } from './dispatching';

export interface OrderChangeLog {
  type: 'change';
  timestamp: Timestamp;
  before: Partial<Order>;
  after: Partial<Order>;
}

export interface OrderStaffLog {
  type: 'staff-change';
  timestamp: Timestamp;
  before: OrderStaff | null;
  after: OrderStaff | null;
}

export interface OrderPaymentLog {
  type: 'payment';
  timestamp: Timestamp;
  info: string[];
}

export interface OrderInfoLog {
  type: 'info';
  timestamp: Timestamp;
  info: string[];
}

export interface OrderMatchingLog {
  type: 'matching';
  timestamp: Timestamp;
  info: string[];
}

export interface OrderCourierLocationLog {
  type: 'courier-location';
  timestamp: Timestamp;
  location: LatLng;
  courierId: string;
}

/**
 * @deprecated
 */
export interface OrderLocationEntry {
  createdOn: Timestamp;
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
