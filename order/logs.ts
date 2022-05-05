import { FieldValue } from 'firebase/firestore';
import { Order } from '.';
import { LatLng } from '../platform';
import { DispatchingState, DispatchingStatus } from './dispatching';

export interface OrderChangeLog {
  type: 'change';
  timestamp: FieldValue;
  before: Partial<Order>;
  after: Partial<Order>;
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
  dispatchingStatus: DispatchingStatus;
  dispatchingState: DispatchingState | null;
  courierId: string;
}

export type OrderLog =
  | OrderChangeLog
  | OrderInfoLog
  | OrderMatchingLog
  | OrderCourierLocationLog;
