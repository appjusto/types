import {
  IuguMarketplaceAccount,
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

export interface AccountWithdraw {
  accountId: string;
  accountType: AccountType;
  accountExternalId: string;
  amount: string;
  externalId: string;
  status: 'pending' | 'processing' | 'accepted' | 'rejected';
  data: IuguMarketplaceAccountWithdrawResponse;
  feedback?: string;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
}

export interface AccountAdvance {
  accountId: string;
  accountType: AccountType;
  accountExternalId: string;
  data: IuguMarketplaceAccountAdvanceResponse;
  createdOn: FieldValue;
}

export interface AccountTransfer {
  accountType: AccountType;
  accountId: string | null;
  accountExternalId: string;
  data: IuguMarketplaceTransferResponse;
  createdOn: FieldValue;
}
