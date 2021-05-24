import { PayloadMeta } from '.';
import { OrderIssue, OrderRejection } from '../order/issues';
import { IuguPaymentToken } from '../payment/iugu';

export interface GetOrderQuotesPayload {
  orderId: string;
  meta: PayloadMeta;
}

export interface PlaceOrderCreditCardDetails {
  payableWith: 'credit_card';
  paymentMethodId: string;
}

export interface PlaceOrderPixDetails {
  payableWith: 'pix';
  key: string;
}

export type PlaceOrderPaymentDetails =
  | PlaceOrderCreditCardDetails
  | PlaceOrderPixDetails;

export interface SavePaymentTokenPayload {
  cpf?: string;
  paymentToken: IuguPaymentToken;
  meta: PayloadMeta;
}

export interface DeletePaymentMethodPayload {
  paymentMethodId: string;
  meta: PayloadMeta;
}

export type PlaceOrderPayload = {
  orderId: string;
  fleetId: string;
  additionalInfo?: string;
  meta: PayloadMeta;
} & PlaceOrderPaymentDetails;

export interface MatchingTaskPayload {
  orderId: string;
}

export interface MatchOrderPayload {
  orderId: string;
  meta: PayloadMeta;
}

export interface RejectOrderPayload {
  orderId: string;
  rejection: OrderRejection;
  meta: PayloadMeta;
}

export interface NextDispatchingStatePayload {
  orderId: string;
  meta: PayloadMeta;
}

export interface CompleteDeliveryPayload {
  orderId: string;
  handshakeResponse?: string;
  deliveredTo?: string;
  comment?: string;
  meta: PayloadMeta;
}

export interface TipCourierPayload {
  orderId: string;
  tip: number; // in cents;
  meta: PayloadMeta;
}

export interface CancelOrderPayload {
  orderId: string;
  cancellation?: OrderIssue;
  meta: PayloadMeta;
}
