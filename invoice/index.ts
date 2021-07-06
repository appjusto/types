import firebase from 'firebase';
import { IuguInvoiceStatus } from '../payment/iugu';

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
  customerPaymentMethodId: string;
  accountId?: string;
  accountName?: string;
  accountExternalId?: string;
  accountToken?: string;
  fingerprint: InvoiceFingerprint;
  externalId?: string;
  status?: IuguInvoiceStatus;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
