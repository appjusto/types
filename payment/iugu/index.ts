export interface IuguConfig {
  token: string;
  marketplacetoken: string;
  accountid: string;
}

export interface IuguQueryResponse<T> {
  totalItems: number;
  items: T[];
}

export interface IuguSuccessResponse {
  success: boolean;
}

export type {
  IuguCreateMarketplaceAccount,
  IuguMarketPlaceAccountConfigure,
  IuguMarketplaceAccount,
  IuguMarketplaceAccountAdvanceByAmountResponse,
  IuguMarketplaceAccountAdvanceByAmountSimulation,
  IuguMarketplaceAccountAdvanceResponse,
  IuguMarketplaceAccountAdvanceSimulation,
  IuguMarketplaceAccountInfo,
  IuguMarketplaceAccountReceivableItem,
  IuguMarketplaceAccountReceivables,
  IuguMarketplaceAccountTokens,
  IuguMarketplaceAccountVerification,
  IuguMarketplaceAccountVerificationData,
  IuguMarketplaceAccountVerificationRequest,
  IuguMarketplaceAccountWithdrawRequest,
  IuguMarketplaceAccountWithdrawResponse,
  IuguMarketplaceAdvanceInfo,
  IuguMarketplaceTransferRequest,
  IuguMarketplaceTransferResponse,
  IuguMarketplaceUpdateBankAccount,
} from './account';
export type {
  IuguAdhocCharge,
  IuguChargeItem,
  IuguChargeResponse,
  IuguCreateCharge,
  IuguInvoiceCharge,
} from './charge';
export type { IuguCustomer } from './customer';
export type {
  IuguCustomer as IuguApiCustomer,
  IuguCreateCustomerRequest,
} from './customer/api';
export type {
  IuguCommissions,
  IuguCreateInvoiceRequest,
  IuguCreateInvoiceResponse,
  IuguCustomVariable,
  IuguInvoiceCaptureResponse,
  IuguInvoiceStatus,
  IuguItem,
  IuguPayableWith,
  IuguSplit,
} from './invoice';
export type {
  IuguCreateCustomerPaymentMethod,
  IuguCreatePaymentToken,
  IuguCreatePaymentTokenData,
  IuguCustomerPaymentMethod,
  IuguPaymentToken,
} from './methods';
