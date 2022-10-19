import { Timestamp } from 'firebase/firestore';
import { DispatchingStatus, OrderStatus } from '..';

// status timestamps

export type OrderStatusTimestamps = {
  [K in OrderStatus]?: Timestamp;
} & {
  /** @deprecated */
  dispatchingDeclined?: Timestamp;
  /** @deprecated */
  matchingEnded?: Timestamp;
};

// dispatching timestamps

// status
export type OrderDispatchingStatusTimestampsKeys =
  | Exclude<DispatchingStatus, 'no-match'>
  | 'matchingEnded'
  | 'firstMatching';

// state
export type OrderDispatchingStateTimestampsKeys =
  | 'goingPickup'
  | 'arrivedPickup'
  | 'goingDestination'
  | 'arrivedDestination';

export type OrderDispatchingTimestampsKeys =
  | OrderDispatchingStatusTimestampsKeys
  | OrderDispatchingStateTimestampsKeys;

export type OrderDispatchingTimestamps = {
  [K in OrderDispatchingTimestampsKeys]?: Timestamp;
};
