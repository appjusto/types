import firebase from 'firebase';
import {
  IuguMarketplaceAccount,
  IuguMarketplaceAccountInfo,
  IuguMarketplaceAccountTokens,
  IuguMarketplaceAccountVerification,
  IuguMarketplaceAccountWithdrawResponse,
} from './iugu';

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
  accountExternalId: string;
  amount: string;
  externalId: string;
  status: 'pending' | 'processing' | 'accepted' | 'rejected';
  data: IuguMarketplaceAccountWithdrawResponse;
  feedback?: string;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
