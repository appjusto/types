export interface IuguMarketplaceAccountReceivableItem {
  id: number;
  description: string;
  scheduled_date: string;
  invoice_id: string;
  customer_ref: string;
  total: string;
  taxes: string;
  client_share: string;
  commission: string;
  number_of_installments: number;
  installment: number;
}

export interface IuguMarketplaceAccountReceivables {
  totalItems: number;
  items: IuguMarketplaceAccountReceivableItem[];
}

export interface IuguMarketplaceAdvanceInfo {
  advanced_value: string;
  advance_fee: string;
  received_value: string;
}

interface IuguMarketplaceAccountTransactionItem
  extends IuguMarketplaceAccountReceivableItem,
    IuguMarketplaceAdvanceInfo {}

export interface IuguMarketplaceAccountAdvanceSimulation {
  not_found: number[];
  transactions: IuguMarketplaceAccountTransactionItem[];
  total: IuguMarketplaceAdvanceInfo;
}

export interface IuguMarketplaceAccountAdvanceResponse {
  total: IuguMarketplaceAdvanceInfo;
  transactions: IuguMarketplaceAdvanceInfo[];
}
