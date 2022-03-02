import { FieldValue } from 'firebase/firestore';
import { InvoiceType } from '.';
import { AccountType } from '..';
import { IuguInvoiceStatus } from '../payment/iugu';

export interface InvoiceWarehouse {
  invoiceType: InvoiceType;
  orderId: string;
  value: number;
  commission: number | null;
  accountType: AccountType;
  accountId: string | null;
  status: IuguInvoiceStatus;
  createdOn: FieldValue;
  updatedOn: FieldValue | null;
}
