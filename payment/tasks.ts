import { OrderCancellationParams } from '../order/payment';

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
export interface InvoiceTaskHandlerCancelExtra {
  params: OrderCancellationParams;
}
export type InvoiceTaskHandlerExtra =
  | InvoiceTaskHandlerTipExtra
  | InvoiceTaskHandlerCancelExtra;
export interface InvoiceTaskHandler {
  action: InvoiceTaskAction;
  orderId: string;
  extra?: InvoiceTaskHandlerExtra;
}
