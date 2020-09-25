export interface IuguConfig {
  token: string;
  accountid: string;
}

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
    name?: string;
    cpf?: string;
    address: string;
    cnpj?: string;
    company_name?: string;
  };
}

export interface IuguCreatePaymentToken {
  account_id: string;
  method: 'credit_card';
  test?: boolean;
  data: {
    number: string;
    verification_value: string;
    first_name: string;
    last_name: string;
    month: string;
    year: string;
  };
}

export interface IuguPaymentToken {
  id: string;
  method: 'credit_card';
  extra_info: {
    bin: string;
    brand: string; // VISA, MASTERCARD, ...
    display_number: string; // XXXX-XXXX-XXXX-1111
    holder_name: string;
    month: number;
    year: number;
  };
}
