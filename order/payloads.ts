import { LatLng, OrderStatus, PayableWith } from '..';
import { BasePayload } from '../payloads';
import { WithId } from '../platform';
import { Issue } from './issues';
import { OrderCancellationParams } from './private/cancellation';

export interface OrderPayload extends BasePayload {
  orderId: string;
}

export interface GetOrderQuotesPayload extends OrderPayload {
  fleetsIds?: string[];
  paymentMethod?: PayableWith;
}

export type PlaceOrderPayloadPaymentPix = {
  payableWith: 'pix';
};

export type PlaceOrderPayloadPaymentCreditCard = {
  payableWith: 'credit_card';
  paymentMethodId?: string;
  cardId?: string;
};

export type PlaceOrderPayloadPaymentVR = {
  payableWith: 'vr';
  cardId: string;
};

export type PlaceOrderPayloadPayment =
  | PlaceOrderPayloadPaymentPix
  | PlaceOrderPayloadPaymentCreditCard
  | PlaceOrderPayloadPaymentVR;

export interface PlaceOrderPayload extends OrderPayload {
  fleetId?: string;
  payment: PlaceOrderPayloadPayment;
  coordinates?: LatLng;
  additionalInfo?: string;
  invoiceWithCPF?: boolean;
  wantToShareData?: boolean;
}

export interface MatchingTaskPayload extends OrderPayload {
  readyAt?: Date;
}

export interface MatchOrderPayload extends OrderPayload {
  courierId?: string;
  courierCode?: string;
  comment?: string;
  distanceToOrigin?: number;
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
  businessIndemnity?: boolean;
}

export interface GetPlaceChangeInfoPayload extends OrderPayload {}
export interface UpdateOrderStatusPayload extends OrderPayload {
  newStatus: OrderStatus;
  currentStatus?: OrderStatus;
}
