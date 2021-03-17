import {
  IuguChargeResponse,
  IuguCreateInvoiceResponse,
  IuguInvoiceCaptureResponse,
} from '../payment/iugu';

export interface OrderPayment {
  marketplaceAccountId: string;
  marketplaceAccountToken: string;
  invoice?: IuguCreateInvoiceResponse;
  charge?: IuguChargeResponse;
  capture?: IuguInvoiceCaptureResponse;
}
