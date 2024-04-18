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
  | 'tags'
> & {
  phone?: string | null;
  whatsapp?: string | null;
  logistics: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
};
