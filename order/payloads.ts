import { IuguPayableWith } from '../payment/iugu';

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

export interface CompleteDeliveryPayload {
  orderId: string;
  handshakeResponse?: string;
  deliveredTo?: string;
  comment?: string;
}
