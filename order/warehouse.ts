import { OrderType } from '.';
import { FareDetails, OrderStatus } from '..';
import { OrderDispatchingTimestampsKeys } from './timestamps';

export type OrderWarehouse = {
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
  } | null;
  route: {
    distance: number;
  } | null;
  // timestamps: OrderStatusTimestamps;
  // dispatchingTimestamps: OrderDispatchingTimestamps;
} & { [K in OrderStatus]: string } & {
  [K in OrderDispatchingTimestampsKeys]: string;
};
