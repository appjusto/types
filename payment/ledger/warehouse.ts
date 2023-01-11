import { LedgerEntryOperation, LedgerEntryStatus } from '.';
import { Timestamp } from '../../external/firebase';
import { AccountType } from '../tasks';

export interface LedgerEntryWarehouse {
  orderId: string;
  operation: LedgerEntryOperation;
  value: number;
  processingFee: number;
  status: LedgerEntryStatus;
  from: {
    accountId: string | null;
    accountType: AccountType;
    token?: string | null;
  };
  to: {
    accountId: string | null;
    accountType: AccountType;
  };
  description?: string;
  createdBy: string;
  updatedBy?: string;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}
