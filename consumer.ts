import { Place } from './order/place';
import { IuguCustomerPaymentMethod } from './payment/iugu';
import { UserProfile } from './profile';

export interface CustomerPaymentMethod extends IuguCustomerPaymentMethod {
  cpf: string | null;
}

export interface PaymentChannel {
  id: string;
  methods?: CustomerPaymentMethod[];
  mostRecentPaymentMethodId: string;
}

export interface ConsumerServiceStatistics {
  totalOrders: number;
  averageTicketPrice: number;
}

export interface ConsumerStatistics {
  totalOrders: number;
  food: ConsumerServiceStatistics;
  p2p: ConsumerServiceStatistics;
}

export interface ConsumerProfile extends UserProfile {
  paymentChannel?: PaymentChannel;
  statistics?: ConsumerStatistics;
  favoritePlaces?: Place[];
}
