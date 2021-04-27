import { IuguPaymentToken } from '../payment/iugu';
import { LatLng } from '../platform';
import { OrderIssue, OrderRejection } from './issues';

// meta
export interface PayloadMeta {
  version: string | null;
}

// account
export interface DeleteAccountPayload {
  notWorkingOnMyRegion: boolean;
  didntFindWhatINeeded: boolean;
  pricesHigherThanAlternatives: boolean;
  didntLikeApp: boolean;
  didntFeelSafe: boolean;
  ratherUseAnotherApp: boolean;
  meta: PayloadMeta;
}

// profile
export interface VerifyCourierProfilePayload {
  meta: PayloadMeta;
}

export interface VerifyBusinessProfilePayload {
  businessId: string;
  meta: PayloadMeta;
}

// order
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

export type PlaceOrderPayload = {
  orderId: string;
  fleetId: string;
  meta: PayloadMeta;
} & PlaceOrderPaymentDetails;

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

export interface SavePaymentTokenPayload {
  cpf?: string;
  paymentToken: IuguPaymentToken;
  meta: PayloadMeta;
}

export interface DeletePaymentMethodPayload {
  paymentMethodId: string;
  meta: PayloadMeta;
}

export interface FetchTotalCouriersNearbyPayload {
  location: LatLng;
  distance: number;
  meta: PayloadMeta;
}
