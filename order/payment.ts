export interface OrderPayment {
  marketplaceAccountId?: string;
  marketplaceAccountToken?: string;
}

export type OrderPaymentType = 'products' | 'delivery' | 'platform';
