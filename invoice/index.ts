import { Timestamp } from '../external/firebase';
import { FareDetails } from '../order/fare';
import { PayableWith } from '../payment';
import { IuguInvoiceStatus } from '../payment/iugu';
import { AccountType } from '../payment/tasks';

export interface InvoiceFingerprint {
  orderId: string;
  nounce: string;
}

export type InvoiceType = 'food' | 'p2p' | 'tip';

export interface Invoice {
  invoiceType: InvoiceType;
  orderId: string;
  orderCode: string;
  value: number;
  fare: FareDetails;
  /** @deprecated */
  processingFee: number;
  deliveryCosts?: number;
  commission: number | null;
  consumerId: string;
  customerPaymentMethodId: string;
  accountId?: string;
  accountName?: string;
  accountExternalId?: string;
  accountToken?: string;
  accountType: AccountType;
  fingerprint: InvoiceFingerprint;
  externalId: string;
  status: IuguInvoiceStatus;
  error?: {
    LR: string;
    message?: string;
  };
  pix: {
    qrcode: string;
    qrcodeText: string;
    status: 'qr_code_created';
  } | null;
  paymentMethod: PayableWith;
  paid?: number;
  paidAt?: string | null;
  payerDocument?: string | null;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}
