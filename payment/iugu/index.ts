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

export {
  IuguCreateMarketplaceAccount,
  IuguMarketplaceAccount,
  IuguMarketplaceAccountAdvanceByAmountResponse,
  IuguMarketplaceAccountAdvanceByAmountSimulation,
  IuguMarketplaceAccountAdvanceResponse,
  IuguMarketplaceAccountAdvanceSimulation,
  IuguMarketPlaceAccountConfigure,
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
export {
  IuguAdhocCharge,
  IuguChargeItem,
  IuguChargeResponse,
  IuguCreateCharge,
  IuguInvoiceCharge,
} from './charge';
export { IuguCreateCustomerRequest, IuguCustomer } from './customer';
export {
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
export {
  IuguCreateCustomerPaymentMethod,
  IuguCreatePaymentToken,
  IuguCreatePaymentTokenData,
  IuguCustomerPaymentMethod,
  IuguPaymentToken,
} from './methods';
