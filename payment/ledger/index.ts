import { Timestamp } from '../../external/firebase';
import { IuguMarketplaceTransferResponse } from '../iugu';
import { AccountType } from '../tasks';

export type LedgerEntryOperation =
  | 'delivery'
  | 'tip'
  | 'same-owner-accounts'
  | 'business-insurance'
  | 'others'
  | 'credit'
  | 'debit';

export type LedgerEntryStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'canceled'
  | 'processing'
  | 'paid';

export interface LedgerEntry {
  orderId: string;
  operation: LedgerEntryOperation;
  value: number;
  processingFee?: number;
  status: LedgerEntryStatus;
  from: {
    accountId: string | null;
    accountType: AccountType;
    token?: string | null;
  };
  to: {
    accountId: string | null;
    phoneNumber?: string;
    accountType: AccountType | 'consumer';
  };
  description?: string;
  transfer?: IuguMarketplaceTransferResponse;
  createdBy:
    | 'platform'
    | {
        id: string;
        email: string;
      };
  updatedBy?: {
    id: string;
    email: string;
  };
  taskName?: string | null;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}
