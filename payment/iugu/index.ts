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

// payment token
export interface IuguCreatePaymentTokenData {
  number: string;
  verification_value: string;
  first_name: string;
  last_name: string;
  month: string;
  year: string;
}

export interface IuguCreatePaymentToken {
  account_id: string;
  method: 'credit_card';
  test?: boolean;
  data: IuguCreatePaymentTokenData;
}

export interface IuguPaymentToken {
  id: string;
  method: 'credit_card';
  extra_info: {
    bin?: string;
    brand: string; // VISA, MASTERCARD, ...
    display_number: string; // XXXX-XXXX-XXXX-1111
    holder_name: string;
    month: number;
    year: number;
  };
}
// payment method

export interface IuguCreateCustomerPaymentMethod {
  description: string;
  token: string;
  set_as_default?: boolean;
}

export interface IuguCustomerPaymentMethod {
  id: string;
  description: string;
  item_type: 'credit_card';
  data: {
    brand: string; // VISA, MASTERCARD, ...
    display_number: string; // XXXX-XXXX-XXXX-1111
    last_digits: string;
    holder_name: string;
    month: number;
    year: number;
  };
}

// invoices

export interface IuguChargeItem {
  description: string;
  quantity?: number;
  price_cents: number; // minimum 100
}

// charges

export interface IuguInvoiceCharge {
  invoice_id: string;
  token?: string;
}

export interface IuguAdhocCharge {
  email: string;
  items: IuguChargeItem[];
  token?: string;
}

export type IuguCreateCharge = {
  customer_payment_method_id: string;
} & (IuguAdhocCharge | IuguInvoiceCharge);

// marketplace account

export interface IuguCreateMarketplaceAccount {
  name?: string;
}

export interface IuguMarketplaceAccountTokens {
  account_id: string;
  name: string;
  live_api_token: string;
  test_api_token: string;
  user_token: string;
}

export interface IuguMarketPlaceAccountConfigure {
  auto_withdraw?: boolean;
  auto_advance?: boolean;
  auto_advance_type?: 'daily' | 'weekly' | 'monthly' | 'days_after_payment';
  auto_advance_option?: number;
  credit_card?: {
    active: boolean;
    soft_descriptor: string; // 12 chars limit
    installments: false;
    two_step_transaction: boolean;
  };
  payment_email_notification?: boolean;
  payment_email_notification_receiver?: string;
}

export interface IuguMarketplaceAccount {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  is_verified: boolean;
  last_verification_request_status: string;
  last_verification_request_data: string | null;
  last_verification_request_feedback: string | null;
  change_plan_type: number;
  subscriptions_trial_period: number;
  disable_emails: boolean;
  last_withdraw: string | null;
  total_subscriptions: number;
  reply_to: string | null;
  webapp_on_test_mode: boolean;
  marketplace: boolean;
  default_return_url: string;
  auto_withdraw: boolean;
  balance: string;
  protected_balance: string;
  payable_balance: string;
  receivable_balance: string;
  commission_balance: string;
  volume_last_month: string;
  volume_this_month: string;
  taxes_paid_last_month: string;
  taxes_paid_this_month: string;
  custom_logo_url: string | null;
  custom_logo_small_url: string | null;
  informations: [{ key: string; value: string }];
  configuration: {
    commission_percent: number;
    credit_card: {
      active: boolean;
      soft_descriptor: string;
      two_step_transaction: boolean;
    };
  };
}

export interface IuguMarketplaceAccountVerificationData {
  price_range: string; // 'Até R$ 100,00', 'Entre R$ 100,00 e R$ 500,00', 'Mais que R$ 500,00')
  physical_products: boolean;
  business_type: string;
  person_type: 'Pessoa Física' | 'Pessoa Jurídica';
  automatic_transfer: boolean;
  address: string;
  cep: string;
  city: string;
  state: string;
  telephone: string;
  // PF
  name?: string;
  cpf?: string;
  // PJ
  cnpj?: string;
  company_name?: string;
  resp_name?: string;
  // bank information
  bank: string;
  account_type: 'Corrente' | 'Poupança';
  bank_ag: string;
  bank_cc: string;
}

export interface IuguMarketplaceAccountVerificationRequest {
  data: IuguMarketplaceAccountVerificationData;
}

export interface IuguMarketplaceAccountVerification {
  id: string;
  data: IuguMarketplaceAccountVerificationData & {
    document_id: number;
    document_cpf: number;
    document_activity: number;
  };
  account_id: string;
  created_at: string;
}

export interface IuguMarketplaceAccountInfo {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  can_receive: boolean;
  'is_verified?': boolean; // WTF iugu?
  last_verification_request_status: string;
  last_verification_request_data: string;
  last_verification_request_feedback: string;
  // ...
}

export { IuguChargeResponse } from './charge';
export { IuguCreateCustomerRequest, IuguCustomer } from './customer';
export {
  IuguCommissions,
  IuguCreateInvoiceRequest,
  IuguCreateInvoiceResponse,
  IuguInvoiceCaptureResponse,
  IuguItem,
  IuguPayableWith,
  IuguSplit,
} from './invoice';
