import { FieldValue } from 'firebase/firestore';
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

export interface AccountWithdraw {
  accountId: string;
  accountType: AccountType;
  accountExternalId: string;
  amount: string;
  externalId: string;
  status: 'pending' | 'processing' | 'accepted' | 'rejected';
  fee: number;
  data: IuguMarketplaceAccountWithdrawResponse;
  feedback?: string;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
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
  createdOn: FieldValue;
}

export interface AccountTransfer {
  accountType: AccountType;
  accountId: string | null;
  accountExternalId: string;
  data: IuguMarketplaceTransferResponse;
  createdOn: FieldValue;
}
