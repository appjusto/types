import {
  IuguMarketplaceAccount,
  IuguMarketplaceAccountInfo,
  IuguMarketplaceAccountTokens,
  IuguMarketplaceAccountVerification,
} from './iugu';

export interface MarketplaceAccountInfo {
  situation:
    | 'pending'
    | 'created'
    | 'configured'
    | 'waiting-verification'
    | 'verified'
    | 'invalid';
  tokens?: IuguMarketplaceAccountTokens;
  account?: IuguMarketplaceAccount;
  verification?: IuguMarketplaceAccountVerification;
  info?: IuguMarketplaceAccountInfo;
  issues?: string[];
}
