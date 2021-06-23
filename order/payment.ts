export interface OrderPayment {
  marketplaceAccountId?: string;
  marketplaceAccountToken?: string;
  invoiceId?: string;
  invoiceExternalId?: string;
}

export type OrderPaymentType = 'products' | 'delivery' | 'platform';
