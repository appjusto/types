import { IuguPayableWith } from '../payment/iugu';
import { OrderPayment } from './payment';

export interface OrderPrivatePlatform {
  handshakeChallenge?: string;
  handshakeResponse?: string;
  paymentDetails: {
    payableWith: IuguPayableWith;
    customerId: string;
    customerEmail: string;
    customerName: string;
    customerCPF: string;
    customerPaymentMethodId: string | null;
  };
  deliveryPayment: OrderPayment | null;
  productsPayment: OrderPayment | null;
  tipPayment?: OrderPayment;
}
