import { BasePayload } from '.';
import { Issue, OrderIssue } from '../order/issues';
import { WithId } from '../platform';

export interface OrderPayload extends BasePayload {
  orderId: string;
}

export interface GetOrderQuotesPayload extends OrderPayload {}

export interface PlaceOrderPayload extends OrderPayload {
  fleetId: string;
  invoiceWithCPF: boolean;
  additionalInfo?: string;
  payableWith: 'pix' | 'credit_card';
  key?: string;
  paymentMethodId?: string;
  wantToShareData?: boolean;
}

export interface MatchingTaskPayload extends OrderPayload {}

export interface MatchOrderPayload extends OrderPayload {}

export interface OrderIssuePayload extends OrderPayload {
  issue: WithId<Issue>;
  comment?: string;
}

export interface RejectOrderPayload extends OrderIssuePayload {}
export interface DropOrderPayload extends OrderIssuePayload {}

export interface NextDispatchingStatePayload extends OrderPayload {}

export interface CompleteDeliveryPayload extends OrderPayload {
  handshakeResponse?: string;
  deliveredTo?: string;
  comment?: string;
}

export interface TipCourierPayload extends OrderPayload {
  tip: number; // in cents;
}

export interface CalculateCancelingCostsPayload extends OrderPayload {
  orderId: string;
}

export interface CancelOrderPayload extends OrderPayload {
  acknowledgedCosts: number;
  cancellation?: OrderIssue;
  comment?: string;
}
