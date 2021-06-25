export type AccountType = 'courier' | 'business';

export interface AccountTaskPayload {
  type: AccountType;
  id: string;
  recreate?: boolean;
}

export type InvoiceTaskAction =
  | 'create-service-invoice'
  | 'create-delivery-invoice'
  | 'capture-order-invoices'
  | 'create-tip-invoice'
  | 'cancel-invoices'
  | 'recreate-invoices';

// inovoice tasks
export interface InvoiceTaskHandlerTipExtra {
  tip: number;
}
export interface InvoiceTaskHandlerInvoicesExtra {
  invoicesIds: string[];
}
export type InvoiceTaskHandlerExtra =
  | InvoiceTaskHandlerTipExtra
  | InvoiceTaskHandlerInvoicesExtra;

export interface InvoiceTaskHandler {
  action: InvoiceTaskAction;
  orderId: string;
  extra?: InvoiceTaskHandlerExtra;
}
