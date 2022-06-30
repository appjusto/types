import { FieldValue } from 'firebase/firestore';

export type LedgerEntryType = 'debit' | 'credit';
export type LedgerEntryOperation = 'delivery';
export type LedgerEntryStatus = 'pending' | 'canceled' | 'paid';

export interface LedgerEntry {
  type: LedgerEntryType;
  operation: LedgerEntryOperation;
  amount: number;
  status: LedgerEntryStatus;
  counterpartAccountId: string;
  description?: string;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
}
