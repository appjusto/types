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
  bank_slip?: {
    active: boolean;
    extra_due?: number;
    reprint_extra_due?: number;
  };
  payment_email_notification?: boolean;
  payment_email_notification_receiver?: string;
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
  balance: string;
  balance_available_for_withdraw: string;
  payable_balance: string;
  // ...
}

export interface IuguMarketplaceAccountVerificationData {
  price_range: string; // Valor máximo da venda ('Até R$ 100,00', 'Entre R$ 100,00 e R$ 500,00', 'Mais que R$ 500,00')
  physical_products: boolean; // Vende produtos físicos?
  business_type: string; // Descrição do negócio
  person_type: 'Pessoa Física' | 'Pessoa Jurídica';
  automatic_transfer: boolean; // Saque automático (Recomendamos que envie 'true')
  address: string;
  cep: string;
  city: string;
  state: string;
  telephone: string;
  // PF
  cpf?: string; // CPF caso Pessoa Física (apenas números)
  name?: string; // Nome caso Pessoa Física
  // PJ
  cnpj?: string; // CNPJ caso Pessoa Jurídica (apenas números)
  company_name?: string; // Nome da Empresa, caso Pessoa Jurídica
  resp_name?: string; // Nome do Responsável, caso Pessoa Jurídica
  resp_cpf?: string; // CPF do Responsável, caso Pessoa Jurídica
  // bank information
  bank: string; // 'Itaú', 'Bradesco', 'Caixa Econômica', 'Banco do Brasil', 'Santander', 'Banrisul', 'Sicredi', 'Sicoob', 'Inter', 'BRB', 'Via Credi', 'Neon', 'Votorantim', 'Nubank', 'Pagseguro', 'Banco Original', 'Safra', 'Modal', 'Banestes','Unicred','Money Plus','Mercantil do Brasil','JP Morgan','Gerencianet Pagamentos do Brasil', 'Banco C6', 'BS2', 'Banco Topazio', 'Uniprime', 'Stone', 'Banco Daycoval', 'Rendimento', 'Banco do Nordeste', 'Citibank', 'PJBank', 'Cooperativa Central de Credito Noroeste Brasileiro', 'Uniprime Norte do Paraná', 'Global SCM', 'Next', 'Cora', 'Mercado Pago', 'Banco da Amazonia', 'BNP Paribas Brasil', 'Juno','Cresol','BRL Trust DTVM','Banco Banese','Banco BTG Pactual','Banco Omni'
  bank_ag: string;
  bank_cc: string;
  account_type: 'Corrente' | 'Poupança';
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
  balance_available_for_withdraw: string;
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

export {
  IuguMarketplaceAccountAdvanceResponse,
  IuguMarketplaceAccountAdvanceSimulation,
  IuguMarketplaceAccountReceivableItem,
  IuguMarketplaceAccountReceivables,
  IuguMarketplaceAdvanceInfo,
} from './receivables';
export {
  IuguMarketplaceTransferRequest,
  IuguMarketplaceTransferResponse,
} from './transfer';
export {
  IuguMarketplaceAccountWithdrawRequest,
  IuguMarketplaceAccountWithdrawResponse,
} from './withdraw';
