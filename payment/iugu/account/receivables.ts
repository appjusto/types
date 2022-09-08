export interface IuguMarketplaceAccountReceivableItem {
  id: number;
  description: string;
  scheduled_date: string;
  invoice_id: string;
  customer_ref: string;
  total: string;
  total_cents: number;
  taxes: string;
  taxes_cents: number;
  client_share: string;
  commission: string;
  number_of_installments: number;
  installment: number;
  created_at: string;
  updated_at: string;
  advanceable: boolean;
}

export interface IuguMarketplaceAccountReceivables {
  totalItems: number;
  items: IuguMarketplaceAccountReceivableItem[];
}

export interface IuguMarketplaceAdvanceInfo {
  advanced_value: string;
  advance_fee: string;
  received_value: string;
  id: number;
}

interface IuguMarketplaceAccountTransactionItem
  extends IuguMarketplaceAccountReceivableItem {
  advanced_value: string;
  advance_fee: string;
  received_value: string;
}

export interface IuguMarketplaceAccountAdvanceSimulation {
  not_found: number[];
  transactions: IuguMarketplaceAccountTransactionItem[];
  total: IuguMarketplaceAdvanceInfo;
}

export interface IuguMarketplaceAccountAdvanceByAmountSimulation {
  nearest: {
    advanceable_amount_cents: number;
    advancement_fee_cents: number;
    advanceable_installments: number;
    simulation_id: string;
  };
  farthest: {
    advanceable_amount_cents: number;
    advancement_fee_cents: number;
    advanceable_installments: number;
    simulation_id: string;
  };
}

export interface IuguMarketplaceAccountAdvanceResponse {
  total: IuguMarketplaceAdvanceInfo;
  transactions: IuguMarketplaceAdvanceInfo[];
}

export interface IuguMarketplaceAccountAdvanceByAmountResponse {
  result: {
    advancement_request: string;
  };
}
