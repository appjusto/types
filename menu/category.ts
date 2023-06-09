import { WithId } from '../platform';
import { Product } from './product';

export interface Category {
  name: string;
  enabled: boolean;
  externalId?: string;
  // transient
  items?: WithId<Product>[];
}
