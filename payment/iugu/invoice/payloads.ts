import { IuguInvoiceStatus } from '.';

// export interface InvoiceCreatedPayload {
//   event: 'invoice.created';
//   data: {
//     id: string;
//     account_id: string;
//     status: IuguInvoiceStatus;
//     // subscription_id?: string;
//   };
// }

export interface InvoiceStatusChangedPayload {
  event: 'invoice.status_changed';
  data: {
    id: string;
    account_id: string;
    status: IuguInvoiceStatus;
    payment_method: 'iugu_bank_slip' | 'iugu_credit_card' | 'iugu_pix';
    paid_at: string;
    payer_cpf_cnpj: string;
    // subscription_id?: string;
  };
}

export interface InvoicePaymentFailedPayload {
  event: 'invoice.payment_failed';
  data: {
    id: string;
    account_id: string;
    status: IuguInvoiceStatus;
    // subscription_id?: string;
    lr: string;
  };
}

export interface InvoiceReleasedPayload {
  event: 'invoice.released';
  data: {
    id: string;
    account_id: string;
    status: IuguInvoiceStatus;
    // subscription_id?: string;
    // number_of_installments?: string;
    amount: string;
    payment_method: 'iugu_bank_slip' | 'iugu_credit_card';
  };
}

export type InvoiceHookPayload =
  // | InvoiceCreatedPayload
  | InvoiceStatusChangedPayload
  | InvoicePaymentFailedPayload
  | InvoiceReleasedPayload;
