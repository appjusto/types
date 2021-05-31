import firebase from 'firebase';
import { IuguPayableWith } from '../payment/iugu';
import { Issue } from './issues';
import { OrderPayment, OrderPaymentType } from './payment';

export interface OrderCancellationParams {
  refund: OrderPaymentType[];
}

export interface OrderCancellation {
  canceledById: string;
  params: OrderCancellationParams;
  issue: Issue | null;
  comment: string | null;
  timestamp: firebase.firestore.FieldValue;
}

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
