import { BasePayload } from '.';
import { OrderIssue, OrderRejection } from '../order/issues';

export interface OrderPayload extends BasePayload {
  orderId: string;
}

export interface GetOrderQuotesPayload extends OrderPayload {}

export interface PlaceOrderPayload extends OrderPayload {
  fleetId: string;
  additionalInfo?: string;
  payableWith: 'pix' | 'credit_card';
  key?: string;
  paymentMethodId?: string;
}

export interface MatchingTaskPayload {
  orderId: string;
}

export interface MatchOrderPayload extends OrderPayload {}

export interface RejectOrderPayload extends OrderPayload {
  rejection: OrderRejection;
}

export interface NextDispatchingStatePayload extends OrderPayload {}

export interface CompleteDeliveryPayload extends OrderPayload {
  handshakeResponse?: string;
  deliveredTo?: string;
  comment?: string;
}

export interface TipCourierPayload extends OrderPayload {
  tip: number; // in cents;
}

export interface CalculateCancelingCostsPayload extends OrderPayload {}

export interface CancelOrderPayload extends OrderPayload {
  acknowledgedCosts: number;
  cancellation?: OrderIssue;
  comment?: string;
}
