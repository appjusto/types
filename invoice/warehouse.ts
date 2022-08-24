import { FieldValue } from 'firebase/firestore';
import { InvoiceType } from '.';
import { AccountType } from '..';
import { FareDetails } from '../order/fare';
import { IuguInvoiceStatus } from '../payment/iugu';

export interface InvoiceWarehouse {
  invoiceType: InvoiceType;
  orderId: string;
  value: number;
  fare: FareDetails | null;
  commission: number | null;
  accountType: AccountType;
  accountId: string | null;
  consumerId: string | null;
  status: IuguInvoiceStatus;
  createdOn: FieldValue;
  updatedOn: FieldValue | null;
}
