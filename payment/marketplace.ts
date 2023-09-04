import { Timestamp } from '../external/firebase';
import {
  IuguMarketplaceAccount,
  IuguMarketplaceAccountAdvanceByAmountResponse,
  IuguMarketplaceAccountAdvanceResponse,
  IuguMarketplaceAccountInfo,
  IuguMarketplaceAccountTokens,
  IuguMarketplaceAccountVerification,
  IuguMarketplaceAccountWithdrawResponse,
  IuguMarketplaceTransferResponse,
} from './iugu';
import { AccountType } from './tasks';

export type MarketplaceAccountSituation =
  | 'pending'
  | 'created'
  | 'configured'
  | 'waiting-verification'
  | 'verified'
  | 'invalid';

export interface MarketplaceAccountInfo {
  situation: MarketplaceAccountSituation;
  tokens?: IuguMarketplaceAccountTokens;
  account?: IuguMarketplaceAccount;
  verification?: IuguMarketplaceAccountVerification;
  info?: IuguMarketplaceAccountInfo;
  pixEnabled?: boolean;
  issues?: string[];
}

export type WithdrawStatus = 'pending' | 'processing' | 'accepted' | 'rejected';
export interface AccountWithdraw {
  accountId: string;
  accountType: AccountType;
  accountExternalId: string;
  amount: string;
  externalId: string;
  status: WithdrawStatus;
  fee: number;
  data: IuguMarketplaceAccountWithdrawResponse;
  feedback?: string;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}

export interface AccountAdvance {
  accountId: string;
  accountType: AccountType;
  accountExternalId: string;
  amount: number;
  fee: number;
  data:
    | IuguMarketplaceAccountAdvanceResponse
    | IuguMarketplaceAccountAdvanceByAmountResponse;
  createdOn: Timestamp;
}

export interface AccountTransfer {
  accountType: AccountType;
  accountId: string | null;
  accountExternalId: string;
  data: IuguMarketplaceTransferResponse;
  createdOn: Timestamp;
}
