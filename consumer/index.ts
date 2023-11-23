import { PayableWith } from '../payment';
import { IuguCustomerPaymentMethod, IuguPayableWith } from '../payment/iugu';
import { Place } from '../place';
import { UserProfile } from '../profile';

/** @deprecated */
export interface PaymentChannel {
  id: string;
  methods?: IuguCustomerPaymentMethod[];
  mostRecentPaymentMethod: IuguPayableWith;
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
  positiveReviews?: number;
  negativeReviews?: number;
}

export interface ConsumerProfile extends UserProfile {
  statistics: ConsumerStatistics;
  /** @deprecated */
  favoritePlaces: Place[];
  defaultPaymentMethod?: PayableWith;
  defaultPaymentMethodId?: string | null;
  /** @deprecated */
  paymentChannel?: PaymentChannel;
}
