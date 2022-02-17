import { DispatchingStatus, OrderStatus } from '..';

// status timestamps

export type OrderStatusTimestamps = {
  [K in OrderStatus]?: firebase.firestore.FieldValue;
} & {
  /** @deprecated */
  dispatchingDeclined?: firebase.firestore.FieldValue;
  /** @deprecated */
  matchingEnded?: firebase.firestore.FieldValue;
};

// dispatching timestamps

// status
export type OrderDispatchingStatusTimestampsKeys =
  | Exclude<DispatchingStatus, 'no-match'>
  | 'matchingEnded';

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
  [K in OrderDispatchingTimestampsKeys]?: firebase.firestore.FieldValue;
};
