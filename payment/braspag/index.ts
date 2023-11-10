import { OrderPayments, Payment, PaymentPart } from '..';
import { AleloPayableWith } from './alelo/card';
import { TicketPayableWith } from './ticket/card';

export type BraspagPayableWith = AleloPayableWith | TicketPayableWith;

export interface BraspagPayment extends Payment {
  processor: 'braspag';
  method: BraspagPayableWith;
  result: any | null; // TODO:
  // payee
  to: {
    accountType: PaymentPart;
    accountId: string | null;
    accountName: string | null;
    affiliateId?: number;
  };
  // result: Invoice;
}
export interface BraspagOrderPayments extends OrderPayments {
  processor: 'braspag';
  paymentMethod: BraspagPayableWith;
  cardId: string;
}
