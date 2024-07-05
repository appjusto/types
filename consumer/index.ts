import { Timestamp } from '../external/firebase';
import { PayableWith } from '../payment';
import { UserProfile } from '../profile';

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
  updatedAt?: Timestamp;
}

export interface ConsumerProfile extends UserProfile {
  statistics: ConsumerStatistics;
  defaultPaymentMethod?: PayableWith;
  defaultPaymentMethodId?: string | null;
}
