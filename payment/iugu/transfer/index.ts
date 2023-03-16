import { AccountType } from '../../tasks';

export interface TransferOptions {
  from: {
    accountType: AccountType;
    accountId: string | null;
    token?: string | null;
  };
  to: {
    accountType: AccountType;
    accountId: string | null;
  };
  value: number;
  description: string;
}
