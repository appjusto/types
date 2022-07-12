import { FieldValue } from 'firebase/firestore';
import { IuguMarketplaceTransferResponse } from '../iugu';
import { AccountType } from '../tasks';

export type LedgerEntryOperation = 'delivery';
export type LedgerEntryStatus = 'pending' | 'canceled' | 'processing' | 'paid';

export interface LedgerEntry {
  orderId: string;
  operation: LedgerEntryOperation;
  value: number;
  status: LedgerEntryStatus;
  from: {
    accountId: string | null;
    accountType: AccountType;
  };
  to: {
    accountId: string | null;
    accountType: AccountType;
  };
  description?: string;
  transfer?: IuguMarketplaceTransferResponse;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
}
