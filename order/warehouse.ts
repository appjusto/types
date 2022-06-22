import { FieldValue, GeoPoint } from 'firebase/firestore';
import { OrderType } from '.';
import {
  FareDetails,
  OrderDispatchingTimestamps,
  OrderStatus,
  OrderStatusTimestamps,
} from '..';

export type OrderWarehouse = {
  code: string;
  type: OrderType;
  status: OrderStatus;
  consumer: {
    id: string;
  };
  courier: {
    id: string | null;
    distanceToOrigin: number | null;
    phone: string | null;
    name: string | null;
  } | null;
  business: {
    id: string;
    document: string;
  } | null;
  fleet: {
    id: string;
  };
  fare: {
    business: FareDetails | null;
    courier: FareDetails | null;
    platform: FareDetails | null;
    total: number;
  } | null;
  route: {
    origin: GeoPoint;
    destination: GeoPoint;
    distance: number;
  } | null;
  cookingTime: number | null;
  tip: number | null;
  deliveryEstimate: FieldValue | null;
  issue: string | null;
  timestamps: OrderStatusTimestamps;
  dispatchingTimestamps: OrderDispatchingTimestamps;
};
