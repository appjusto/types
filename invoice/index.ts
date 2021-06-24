import firebase from 'firebase';
import { IuguInvoiceStatus } from '../payment/iugu';

export interface InvoiceFingerprint {
  orderId: string;
  nounce: string;
}

export interface Invoice {
  invoiceType: 'products' | 'delivery' | 'platform' | 'tip';
  orderId: string;
  accountId?: string;
  accountExternalId?: string;
  accountToken?: string;
  fingerprint: InvoiceFingerprint;
  externalId?: string;
  status?: IuguInvoiceStatus;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
