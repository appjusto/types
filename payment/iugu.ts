export interface IuguConfig {
  token: string;
  accountid: string;
}

export type IuguBankName =
  | 'Itaú'
  | 'Bradesco'
  | 'Caixa Econômica'
  | 'Banco do Brasil'
  | 'Santander'
  | 'Banrisul'
  | 'Sicredi'
  | 'Sicoob'
  | 'Inter'
  | 'BRB'
  | 'Via Credi'
  | 'Neon'
  | 'Votorantim'
  | 'Nubank'
  | 'Pagseguro'
  | 'Banco Original'
  | 'Safra'
  | 'Modal'
  | 'Banestes'
  | 'Unicred'
  | 'Gerencianet Pagamentos do Brasil'
  | 'C6 Bank'
  | 'BS2'
  | 'Banco Topazio'
  | 'Uniprime';

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

// customer

export interface IuguCreateCustomer {
  email: string;
  name: string;
  custom_variables?: object[];
}

export interface IuguCustomer {
  id: string;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
  custom_variables?: object[];
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

export interface IuguCreateInvoiceItem {
  description: string;
  quantity?: number;
  price_cents: number; // minimum 100
}

export interface IuguCreateInvoice {
  email: string;
  due_date: string; // AAAA-MM-DD
  ensure_workday_due_date: false;
  items: IuguCreateInvoiceItem[];
  notification_url?: string;
  fines: false;
  customer_id: string;
  payable_with: 'credit_card';
  custom_variables?: object[];
  order_id?: string;
  ignore_canceled_email?: boolean;
  ignore_due_email?: boolean;
  commissions: {
    cents: number; // int
  };
}

export interface IuguInvoice {
  id: string;
  due_date: string; // AAAA-MM-DD
  currency: string;
  email: string;
  status: string; // pending
  updated_at: string;
  ensure_workday_due_date: false;
  total_cents: number;
  secure_id: string;
  secure_url: string;
  customer_id: string;
  created_at: string;
  items: [
    {
      id: string;
      description: string;
      quantity?: number;
      price_cents: number; // minimum 100
    }
  ];
  notification_url?: string;
  custom_variables?: object[];
  commission_cents: number;
}

// charges

export interface IuguCreateCharge {
  invoice_id: string;
  customer_payment_method_id: string;
}

export interface IuguCharge {
  message: string;
  errors: object;
  url: string;
  pdf: string;
  identification: string | null;
  invoice_id: string;
}

// marketplace account

export interface IuguCreateMarketplaceAccount {
  commissions: {
    cents: number; // int
    percent: number; // float
  };
}

export interface IuguMarketplaceAccount {
  account_id: string;
  name: string;
  live_api_token: string;
  test_api_token: string;
  user_token: string;
}

export interface IuguMarketplaceAccountVerificationRequest {
  data: {
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
    bank: IuguBankName;
    bank_ag: string;
    bank_acc: string;
  };
}
