export interface IuguMarketplaceAccountWithdrawRequest {
  amount: number;
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
  custom_variables: object[];
  feedback: string;
  id: string;
  reference: string;
  status: 'pending';
  updated_at: string;
}
