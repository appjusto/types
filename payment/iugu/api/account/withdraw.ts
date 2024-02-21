import { IuguCustomVariable } from '../invoice';

export interface IuguMarketplaceAccountWithdrawRequest {
  amount: number;
  custom_variables?: IuguCustomVariable[];
}
export interface IuguMarketplaceAccountWithdrawResponse {
  account_id: string;
  account_name: string;
  amount: string;
  bank_address: {
    account_type: string;
    bank: string;
    bank_ag: string;
    bank_cc: string;
  };
  created_at: string;
  custom_variables: IuguCustomVariable[];
  feedback: string;
  paying_at: string;
  id: string;
  reference: string;
  status: 'pending';
  updated_at: string;
}

export type PixKeyType = 'cpf' | 'cnpj' | 'email' | 'phone' | 'evp';

export interface PixReceiver {
  fullname: string;
  document: string;
  type: PixKeyType;
  key: string;
}

export interface IuguMarketplaceAccountPixOutRequest {
  api_token: string;
  transfer_type: 'pix';
  amount_cents: number;
  description: string;
  check_payer?: string;
  receiver: {
    name: string;
    cpf_cnpj: string;
    pix: {
      type: PixKeyType;
      key: string;
    };
  };
}

export interface IuguMarketplaceAccountPixOutResponse {
  transfer_request_id: string;
  created_at: string;
  amount_cents: number;
  transfer_type: 'pix';
  end_to_end_id: string;
  external_reference: null | string;
  receipt_url: string;
  status: 'processing';
}
