import { IuguCharge, IuguInvoice } from '../payment/iugu';
import { WithId } from '../platform';
import { Review } from '../reviews';
import { OrderConsumer } from './consumer';
import { OrderCourier } from './courier';
import { DispatchingState } from './dispatching';
import { Fare } from './fare';
import { OrderIssue, OrderRejection } from './issues';
import { OrderItem } from './item';
import { Place } from './place';
import { OrderStatus } from './status';

export type OrderType = 'p2p' | 'food';

export interface Order {
  type: OrderType;
  status: OrderStatus;
  consumer: OrderConsumer;
  courier?: OrderCourier;
  business?: OrderBusiness;
  items?: OrderItem[];
  code?: string;
  seq?: string | null;
  // places & route
  origin?: Place;
  destination?: Place;
  distance?: number; // in meters
  duration?: number; // in seconds
  routePolyline?: string;
  dispatchingState?: DispatchingState;
  // fare, tip & payment
  fare?: Fare;
  tip?: {
    value: number; // in cents;
    charge?: IuguCharge;
  };
  payment?: {
    invoice: IuguInvoice;
    paymentMethodId: string;
    charge?: IuguCharge;
  };
  // issues, reviews, etc.
  rejectionHistory?: WithId<OrderRejection>[];
  cancellation?: OrderIssue;
  problem?: OrderIssue;
  courierProblem?: OrderIssue;
  courierReview?: Review;
  // metadata
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}

export interface OrderBusiness {
  id: string;
  name?: string;
  // venueId: string;
}
