export interface IuguChargeResponse {
  success: boolean;
  url: string;
  pdf: string;
  invoice_id: string;
  message?: string;
  errors?: object;
  LR?: string;
  reversible?: boolean;
  token?: string;
  brand?: string;
  bin?: string;
  last4?: string;
  // bank slip
  identification?: string | null;
}

export interface IuguInvoiceCharge {
  invoice_id: string;
  token?: string;
}

export interface IuguChargeItem {
  description: string;
  quantity?: number;
  price_cents: number; // minimum 100
}

export interface IuguAdhocCharge {
  email: string;
  items: IuguChargeItem[];
  token?: string;
}

export type IuguCreateCharge = {
  customer_payment_method_id: string;
} & (IuguAdhocCharge | IuguInvoiceCharge);
