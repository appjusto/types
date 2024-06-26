import {
  Coupon,
  OrderDispatchingTimestamps,
  OrderStatusTimestamps,
  WithId,
} from '..';
import { Timestamp } from '../external/firebase';

import { PayableWith } from '../payment/index';
import { Place } from '../place';
import {
  ExternalComponent,
  PlatformAdminComponent,
} from '../platform/components';
import { OrderConsumer } from './consumer';
import { OrderCourier } from './courier';
import { DispatchingState, DispatchingStatus } from './dispatching';
import { Fare } from './fare';
import { OrderFlag } from './flags';
import { OrderItem } from './item';
import { OrderStatus } from './status';
import { OrderTag } from './tags';
import { OrderTip } from './tip';

export type OrderType = 'p2p' | 'food';

export interface OrderRoute {
  distance?: number; // in meters
  duration?: number; // in seconds
  polyline?: string;
  issue: string | null;
}

export interface OrderArrivals {
  origin?: {
    estimate?: Timestamp | null;
    arrival?: Timestamp | null;
  };
  destination?: {
    initialEstimate?: Timestamp | null;
    estimate?: Timestamp | null;
    arrival?: Timestamp | null;
    arrivalLimit?: Timestamp | null;
  };
}
export interface Order {
  type: OrderType;
  status: OrderStatus;
  consumer: OrderConsumer;
  code?: string;
  // payment & fulfillment
  fare?: Fare;
  paymentMethod?: PayableWith;
  paymentInfo?: string;
  fulfillment?: Fulfillment;
  scheduledTo?: Timestamp | null;
  confirmedScheduledTo?: Timestamp | null;
  // products
  business?: OrderBusiness | null;
  items?: OrderItem[];
  cookingTime?: number | null; // in seconds
  // places & route
  origin?: Place & { id?: string };
  destination?: (Place & { id?: string }) | null;
  route?: OrderRoute | null;
  // estimates
  arrivals?: OrderArrivals;
  // delivery
  courier?: OrderCourier | null;
  dispatchingStatus: DispatchingStatus;
  dispatchingState: DispatchingState | null;
  dispatchingTimestamps: OrderDispatchingTimestamps;
  tip?: OrderTip;
  // etc
  coupon?: WithId<Coupon> | null;
  additionalInfo?: string | null;
  staff?: OrderStaff | null;
  issue?: string | null;
  flags?: OrderFlag[];
  tags?: OrderTag[];
  // metadata
  shareToken?: string;
  placedFrom?: 'mobile' | 'web' | 'web-direct';
  acceptedFrom?: 'backoffice' | PlatformAdminComponent | ExternalComponent;
  timestamps: OrderStatusTimestamps;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}

export type Fulfillment = 'delivery' | 'take-away' | 'dine-in';
export interface OrderBusiness {
  id: string;
  name: string;
  cusine: string;
  city?: string;
  state?: string;
  cep?: string;
}

export interface OrderStaff {
  id: string;
  name?: string | null;
  email: string;
}
