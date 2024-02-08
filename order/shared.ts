import { Order } from '..';
import { WithId } from '../platform';

export type SharedOrder = Pick<
  WithId<Order>,
  | 'id'
  | 'type'
  | 'status'
  | 'code'
  | 'fulfillment'
  | 'scheduledTo'
  | 'confirmedScheduledTo'
  | 'business'
  | 'origin'
  | 'destination'
  | 'route'
  | 'arrivals'
  | 'courier'
  | 'dispatchingStatus'
  | 'dispatchingState'
  | 'dispatchingTimestamps'
  | 'additionalInfo'
  | 'timestamps'
> & {
  handshake: string;
};
