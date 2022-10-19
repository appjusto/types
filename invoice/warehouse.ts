import { InvoiceType } from '.';
import { AccountType } from '..';
import { Timestamp } from '../external/firebase';
import { FareDetails } from '../order/fare';
import { IuguInvoiceStatus } from '../payment/iugu';

export interface InvoiceWarehouse {
  invoiceType: InvoiceType;
  orderId: string;
  value: number;
  fare: FareDetails | null;
  commission: number | null;
  deliveryCosts: number;
  accountType: AccountType;
  accountId: string | null;
  consumerId: string | null;
  status: IuguInvoiceStatus;
  createdOn: Timestamp;
  updatedOn: Timestamp | null;
}
