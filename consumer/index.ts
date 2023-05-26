import { Place } from '../order/place';
import { UserProfile } from '../profile';

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
  statistics: ConsumerStatistics;
  favoritePlaces: Place[];
}
