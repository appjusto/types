import { IuguCharge, IuguInvoice, IuguPayableWith } from '../payment/iugu';

export interface OrderPayment {
  payableWith: IuguPayableWith;
  customerId: string;
  customerEmail: string;
  customerPaymentMethodId?: string;
  courierMarketplaceAccountId?: string;
  businessMarketplaceAccountId?: string;
  invoice?: IuguInvoice;
  charge?: IuguCharge;
}
