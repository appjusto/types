import { IuguCustomerPaymentMethod } from './payment/iugu';
import { UserProfile } from './profile';

export interface PaymentChannel {
  id: string;
  methods?: IuguCustomerPaymentMethod[];
  mostRecentPaymentMethodId: string;
}

export interface ConsumerProfile extends UserProfile {
  paymentChannel?: PaymentChannel;
}
