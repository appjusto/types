import { OrderPayments, Payment, PaymentPart } from '..';
import { CreateTicketPaymentResult } from './api';
import { TicketPayableWith } from './payable';

export interface TicketPayment extends Payment {
  processor: 'ticket';
  method: TicketPayableWith;
  result: CreateTicketPaymentResult | null;
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
