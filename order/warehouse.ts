import {
  OrderDispatchingTimestamps,
  OrderStatusTimestamps,
  OrderType,
} from '.';
import { OrderStatus } from '..';

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
  timestamps: OrderStatusTimestamps;
  dispatchingTimestamps: OrderDispatchingTimestamps;
}
