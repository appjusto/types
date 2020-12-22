import { IuguCharge, IuguInvoice } from '../payment/iugu';
import { WithId } from '../platform';
import { Review } from '../reviews';
import { OrderConsumer } from './consumer';
import { OrderCourier } from './courier';
import { DispatchingState } from './dispatching';
import { Fare } from './fare';
import { FoodOrder } from './food';
import { OrderIssue, OrderRejection } from './issues';
import { P2POrder } from './p2p';
import { Place } from './place';
import { OrderStatus } from './status';

export type OrderType = 'p2p' | 'food';

export interface BaseOrder {
  type: OrderType;
  origin: Place;
  destination: Place;
  status: OrderStatus;
  code?: string;
  seq?: string | null;
  consumer: OrderConsumer;
  distance: number; // in meters
  duration: number; // in seconds
  routePolyline: string;
  courier?: OrderCourier;
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

export type Order = P2POrder | FoodOrder;
