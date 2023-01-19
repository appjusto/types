import { Business } from '.';
import { Timestamp } from '../external/firebase';

export type BusinessProfile = Pick<
  Business,
  | 'acceptedPaymentMethods'
  | 'averageDiscount'
  | 'businessAddress'
  | 'coordinates'
  | 'cnpj'
  | 'cuisine'
  | 'deliveryRange'
  | 'description'
  | 'enabled'
  | 'fulfillment'
  | 'g'
  | 'name'
  | 'preparationModes'
  | 'schedules'
  | 'slug'
  | 'status'
  | 'services'
> & { createdAt: Timestamp; updatedAt: Timestamp | null };
