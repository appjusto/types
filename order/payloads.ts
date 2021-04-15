import { IuguPayableWith, IuguPaymentToken } from '../payment/iugu';
import { LatLng } from '../platform';
import { OrderIssue, OrderRejection } from './issues';

export interface GetOrderQuotesPayload {
  orderId: string;
}

export interface PlaceOrderPayload {
  orderId: string;
  payableWith: IuguPayableWith;
  paymentMethodId?: string;
  pixKey?: string;
  fleetId: string;
  // transactionId: string;
}

export interface MatchOrderPayload {
  orderId: string;
}

export interface RejectOrderPayload {
  orderId: string;
  rejection: OrderRejection;
}

export interface NextDispatchingStatePayload {
  orderId: string;
}

export interface CompleteDeliveryPayload {
  orderId: string;
  handshakeResponse?: string;
  deliveredTo?: string;
  comment?: string;
}

export interface TipCourierPayload {
  orderId: string;
  tip: number; // in cents;
}

export interface CancelOrderPayload {
  orderId: string;
  cancellation?: OrderIssue;
}

export interface VerifyBusinessProfilePayload {
  businessId: string;
}

export interface SavePaymentTokenPayload {
  cpf?: string;
  paymentToken: IuguPaymentToken;
}

export interface DeletePaymentMethodPayload {
  paymentMethodId: string;
}

export interface FetchTotalCouriersNearbyPayload {
  location: LatLng;
  distance: number;
}
