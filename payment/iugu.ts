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
