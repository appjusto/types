export type AccountType = 'courier' | 'business';

export interface AccountTaskPayload {
  type: AccountType;
  id: string;
  recreate?: boolean;
}

export type InvoiceTaskAction =
  | 'create-invoices'
  | 'update-delivery-invoice'
  | 'capture-invoices'
  | 'charge-tip'
  | 'cancel-invoices';

// inovoice tasks
export interface InvoiceTaskHandlerTipExtra {
  tip: number;
}
export type InvoiceTaskHandlerExtra = InvoiceTaskHandlerTipExtra;
export interface InvoiceTaskHandler {
  action: InvoiceTaskAction;
  orderId: string;
  extra?: InvoiceTaskHandlerExtra;
}
