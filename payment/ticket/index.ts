import { OrderPayments, Payment, PaymentPart } from '..';
import {
  CancelTicketPaymentResult,
  CaptureTicketPaymentResult,
  CreateTicketPaymentResult,
  RefundTicketPaymentResult,
} from './api';
import { TicketPayableWith } from './payable';

export type TicketProduct = 'TAE' | 'TRE' | 'TF' | 'TKE';

export interface TicketPayment extends Payment {
  processor: 'ticket';
  method: TicketPayableWith;
  authorization: CreateTicketPaymentResult | null;
  capture?: CaptureTicketPaymentResult | null;
  cancellation?: CancelTicketPaymentResult | null;
  refund?: RefundTicketPaymentResult | null;
  // payee
  to: {
    accountType: PaymentPart;
    accountId: string | null;
    accountName: string | null;
    affiliateId?: number;
  };
}
export interface TicketOrderPayments extends OrderPayments {
  processor: 'ticket';
  paymentMethod: TicketPayableWith;
}
