export type AccountType = 'courier' | 'business';

export interface AccountTaskPayload {
  type: AccountType;
  id: string;
  recreate?: boolean;
}

export type InvoiceTaskAction =
  | 'create-invoices'
  | 'update-delivery-invoice'
  | 'capture-invoices';

export interface InvoiceTaskHandler {
  action: InvoiceTaskAction;
  orderId: string;
}
