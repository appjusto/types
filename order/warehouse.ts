import {
  OrderDispatchingTimestamps,
  OrderStatusTimestamps,
  OrderType,
} from '.';
import { FareDetails, OrderStatus } from '..';

export interface OrderWarehouse {
  type: OrderType;
  status: OrderStatus;
  consumer: {
    id: string;
  };
  courier: {
    id: string;
    distanceToOrigin: number;
  } | null;
  business: {
    id: string;
  } | null;
  fleet: {
    id: string;
  };
  fare: {
    business: FareDetails | null;
    courier: FareDetails | null;
    platform: FareDetails | null;
    total: number;
  };
  route: {
    distance: number;
  };
  timestamps: OrderStatusTimestamps;
  dispatchingTimestamps: OrderDispatchingTimestamps;
}
