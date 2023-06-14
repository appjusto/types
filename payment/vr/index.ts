import { OrderPayments, Payment, PaymentPart } from '..';
import { CreateVRPaymentResult } from './api/types';
import { VRPayableWith } from './card';

export interface VRPayment extends Payment {
  processor: 'vr';
  method: VRPayableWith;
  result: CreateVRPaymentResult | null;
  // payee
  to: {
    accountType: PaymentPart;
    accountId: string | null;
    accountName: string | null;
    affiliateId?: number;
  };
  // result: Invoice;
}
export interface VROrderPayments extends OrderPayments {
  processor: 'vr';
  paymentMethod: VRPayableWith;
  cardId: string;
}
