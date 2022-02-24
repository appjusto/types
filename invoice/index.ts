import { IuguInvoiceStatus } from '../payment/iugu';
import { AccountType } from '../payment/tasks';

export interface InvoiceFingerprint {
  orderId: string;
  nounce: string;
}

export type InvoiceType = 'products' | 'delivery' | 'platform' | 'tip';

export interface Invoice {
  invoiceType: InvoiceType;
  orderId: string;
  orderCode: string;
  value: number;
  commission: number | null;
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
  createdOn: FieldValue;
  updatedOn?: FieldValue;
}
