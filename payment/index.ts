import { OrderType } from '..';
import { Timestamp } from '../external/firebase';
import { Fee } from '../platform/fees';
import { IuguPayableWith } from './iugu';
import { VRPayableWith } from './vr/card';

export type PaymentPart = 'courier' | 'consumer' | 'business' | 'platform';

export type PaymentStatus =
  | 'created'
  | 'pending'
  | 'in_analysis'
  | 'paid'
  | 'partially_paid'
  | 'refunded'
  | 'partially_refunded'
  | 'expired'
  | 'authorized'
  | 'canceled'
  | 'in_protest'
  | 'chargeback'
  | 'unauthorized';

export type PaymentProcessor = 'iugu' | 'vr' | 'appjusto' | 'business';
export type BusinessPayableWith =
  | 'cash'
  | 'business-debit-card'
  | 'business-credit-card';
export type PayableWith =
  | IuguPayableWith
  | VRPayableWith
  | BusinessPayableWith
  | 'credits';
export type PaymentService = 'food' | 'p2p' | 'tip';
export interface Payment {
  service: PaymentService;
  processor: PaymentProcessor;
  externalId?: string;
  method: PayableWith;
  value: number;
  paid?: number;
  processing: {
    fee: Fee;
    value: number;
  };
  commission: number;
  order: {
    id: string;
    code: string;
    type: OrderType;
  };
  from: {
    accountType: PaymentPart;
    accountId: string | null;
  };
  to: {
    accountType: PaymentPart;
    accountId: string | null;
    accountName: string | null;
  };
  status: PaymentStatus;
  error?: {
    message: string;
    details?: {
      LR?: string | null;
    };
  };
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

export interface OrderPayments {
  processor: string;
  paymentMethod: PayableWith;
}
