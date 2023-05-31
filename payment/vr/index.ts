import { Payment, PaymentPart } from '..';
import { CreateVRPaymentResult } from './api/types';

export interface VRPayment extends Payment {
  processor: 'vr';
  method: 'vr';
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
export interface VROrderPayments {
  processor: 'vr';
  paymentMethod: 'vr';
}
