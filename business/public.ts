import { Business } from '.';
import { Timestamp } from '../external/firebase';

export type PublicBusiness = Pick<
  Business,
  | 'acceptedPaymentMethods'
  | 'averageDiscount'
  | 'averageCookingTime'
  | 'businessAddress'
  | 'coordinates'
  | 'cnpj'
  | 'cuisine'
  | 'deliveryRange'
  | 'description'
  | 'fulfillment'
  | 'g'
  | 'name'
  | 'reviews'
  | 'preparationModes'
  | 'schedules'
  | 'slug'
  | 'services'
  | 'tags'
> & { createdAt: Timestamp; updatedAt: Timestamp | null };
