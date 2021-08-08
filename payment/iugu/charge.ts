export interface IuguChargeResponse {
  success: boolean;
  message: string;
  errors: object;
  url: string;
  pdf: string;
  identification: string | null;
  invoice_id: string;
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
