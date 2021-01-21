import { CustomerPaymentMethod } from './payment/iugu';
import { UserProfile } from './profile';

export interface PaymentChannel {
  id: string;
  methods?: CustomerPaymentMethod[];
  mostRecentPaymentMethodId: string;
}

export interface ConsumerStatistics {
  totalOrders: number;
}

export interface ConsumerProfile extends UserProfile {
  paymentChannel?: PaymentChannel;
  statistics?: ConsumerStatistics;
}
