import { IuguPayableWith } from '../../payment/iugu';
import { OrderPayment } from '../payment';

export interface OrderPrivatePlatform {
  handshakeChallenge: string;
  paymentDetails: {
    payableWith: IuguPayableWith;
    customerPaymentMethodId: string | null;
  };
  confirmationDetails?: {
    handshakeResponse?: string | null;
    deliveredTo?: string | null;
    comment?: string | null;
  };
  deliveryPayment?: OrderPayment | null;
  productsPayment?: OrderPayment | null;
  platformPayment?: OrderPayment | null;
  tipPayment?: OrderPayment;
}
