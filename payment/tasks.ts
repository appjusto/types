export type AccountType = 'courier' | 'business' | 'platform';

export interface AccountTaskPayload {
  type: AccountType;
  id: string;
  recreate?: boolean;
}

export type InvoiceTaskAction =
  | 'create-service-invoice'
  | 'create-delivery-invoice'
  | 'charge-order-invoices'
  | 'capture-order-invoices'
  | 'create-tip-invoice'
  | 'cancel-invoices'
  | 'recreate-invoices';

// inovoice tasks
export interface InvoiceTaskHandlerTipExtra {
  tip: number;
}
export interface InvoiceTaskHandlerInvoicesExtra {
  invoicesIds: string[] | undefined;
}
export type InvoiceTaskHandlerExtra =
  | InvoiceTaskHandlerTipExtra
  | InvoiceTaskHandlerInvoicesExtra;

export interface InvoiceTaskHandler {
  action: InvoiceTaskAction;
  orderId: string;
  extra?: InvoiceTaskHandlerExtra;
}
