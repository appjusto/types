import { Business } from '.';
import { Timestamp } from '../external/firebase';

export type PublicBusiness = Pick<
  Business,
  | 'acceptedPaymentMethods'
  | 'averageDiscount'
  | 'businessAddress'
  | 'coordinates'
  | 'cnpj'
  | 'cuisine'
  | 'deliveryRange'
  | 'description'
  | 'fulfillment'
  | 'g'
  | 'name'
  | 'preparationModes'
  | 'schedules'
  | 'slug'
  | 'services'
  | 'tags'
> & { createdAt: Timestamp; updatedAt: Timestamp | null };
