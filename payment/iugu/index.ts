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
} from './api/account';
export type {
  IuguAdhocCharge,
  IuguChargeItem,
  IuguChargeResponse,
  IuguCreateCharge,
  IuguInvoiceCharge,
} from './api/charge';
export type { IuguCreateCustomerRequest, IuguCustomer } from './api/customer';
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
} from './api/invoice';
export type {
  IuguCreateCustomerPaymentMethod,
  IuguCreatePaymentToken,
  IuguCreatePaymentTokenData,
  IuguCustomerPaymentMethod,
  IuguPaymentToken,
} from './api/methods';
