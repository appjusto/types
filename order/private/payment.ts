import { IuguPayableWith } from '../../payment/iugu';

export interface OrderPayments {
  payableWith: IuguPayableWith;
  customerPaymentMethodId: string | null;
}
