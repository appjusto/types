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
  | 'minHoursForScheduledOrders'
  | 'name'
  | 'reviews'
  | 'preparationModes'
  | 'schedules'
  | 'slug'
  | 'status'
  | 'services'
  | 'tags'
> & {
  phone?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
};
