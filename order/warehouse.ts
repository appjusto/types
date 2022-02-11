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
  };
  timestamps: OrderStatusTimestamps;
  dispatchingTimestamps: OrderDispatchingTimestamps;
}
