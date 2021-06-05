import { IuguPayableWith } from '../../payment/iugu';
import { OrderPayment } from '../payment';

export interface OrderPayments {
  payableWith: IuguPayableWith;
  customerPaymentMethodId: string | null;
  deliveryPayment?: OrderPayment | null;
  productsPayment?: OrderPayment | null;
  platformPayment?: OrderPayment | null;
  tipPayment?: OrderPayment;
}
