import { IuguInvoiceStatus } from '../payment/iugu';
import { Fee } from '../platform/fees';

export interface OrderTip {
  value: number; // in cents;
  paid?: number; // in cents;
  processing?: {
    fee: Fee; // fraction
    value: number; // in cents;
  };
  status?: IuguInvoiceStatus;
}
