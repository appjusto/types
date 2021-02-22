import { Ordering } from '.';
import { WithId } from '../platform';
import { ComplementGroup } from './complements';

export interface Classification {
  name: string;
}

export interface ProductStatistics {
  totalSold: number;
  averagePrice: number;
}

export interface Product {
  name: string;
  description?: string;
  imageExists?: boolean;
  price: number;
  externalId?: string;
  enabled: boolean;
  classifications: string[];
  complementsEnabled?: boolean;
  complementsOrder?: Ordering;
  statistics?: ProductStatistics;
  // transient
  complementsGroups?: WithId<ComplementGroup>[];
}
