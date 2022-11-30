import { Timestamp } from '../../external/firebase';
import { Place } from '../../order/place';
import { Flavor } from '../../platform';

export interface BusinessRecommendation {
  recommendedBusiness: Place;
  flavor: Flavor;
  userId: string | null;
  instagram: string | null;
  phone: string | null;
  owner: string | null;
  createdOn: Timestamp;
}
