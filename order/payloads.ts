import { IuguPayableWith } from '../payment/iugu';

export interface PlaceOrderPayload {
  orderId: string;
  payableWith: IuguPayableWith;
  paymentMethodId: string | null;
  fleetId: string;
  // transactionId: string;
}

export interface GetOrderQuotesPayload {
  orderId: string;
}
