import { FieldValue } from 'firebase/firestore';
import { InvoiceType } from '.';
import { AccountType } from '..';

export interface InvoiceWarehouse {
  invoiceType: InvoiceType;
  orderId: string;
  value: number;
  commission: number | null;
  accountType: AccountType;
  accountId: string | null;
  consumerId: string | null;
  status: IuguInvoiceStatus;
  createdOn: FieldValue;
  updatedOn: FieldValue | null;
}
