import { BasePayload } from '.';
import { LatLng, OrderStatus, Place } from '..';
import { Issue } from '../order/issues';
import { OrderCancellationParams } from '../order/private/cancellation';
import { OutsourceAccountType, WithId } from '../platform';

export interface OrderPayload extends BasePayload {
  orderId: string;
}

export interface GetOrderQuotesPayload extends OrderPayload {}

export type PlaceOrderPayloadPaymentPix = {
  payableWith: 'pix';
  key: string;
};

export type PlaceOrderPayloadPaymentCreditCard = {
  payableWith: 'credit_card';
  paymentMethodId: string;
};

export type PlaceOrderPayloadPayment =
  | PlaceOrderPayloadPaymentPix
  | PlaceOrderPayloadPaymentCreditCard;

export interface PlaceOrderPayload extends OrderPayload {
  fleetId: string;
  invoiceWithCPF: boolean;
  coordinates?: LatLng;
  additionalInfo?: string;
  payment: PlaceOrderPayloadPayment;
  wantToShareData?: boolean;
}

export interface UpdateOrderPayload extends OrderPayload {
  payment: PlaceOrderPayloadPayment;
}

export interface UpdateOrderPlacePayload extends OrderPayload {
  destination: Place;
  acknowledgedCosts: number;
}

export interface MatchingTaskPayload extends OrderPayload {
  readyAt?: Date;
}

export interface MatchOrderPayload extends OrderPayload {
  courierId?: string;
  comment?: string;
}

export interface OrderIssuePayload extends OrderPayload {
  issue: WithId<Issue>;
  comment?: string;
}

export interface RejectOrderPayload extends OrderIssuePayload {}
export interface DropOrderPayload extends OrderIssuePayload {
  comment?: string;
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

export interface GetCancellationInfoPayload extends OrderPayload {
  orderId: string;
}

export interface GetCancellationInfoResult {
  params: OrderCancellationParams;
  costs: number;
}

export interface GetPlaceChangeInfoResult {
  // which params???
  costs: number;
}

export interface CancelOrderPayload extends OrderPayload {
  orderId: string;
  acknowledgedCosts: number;
  params?: OrderCancellationParams;
  cancellation?: WithId<Issue>;
  comment?: string;
}

export interface GetPlaceChangeInfoPayload extends OrderPayload {}

export interface OutsourceDeliveryPayload extends OrderPayload {
  accountType: OutsourceAccountType;
  comment?: string;
}

export interface UpdateOrderStatusPayload extends OrderPayload {
  newStatus: OrderStatus;
  currentStatus?: OrderStatus;
}
