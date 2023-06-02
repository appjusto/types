import { BusinessSchedule } from '..';
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
  /**
   * @deprecated
   */
  imageExists?: boolean;
  imageUrls?: string[];
  price: number;
  externalId?: string;
  enabled: boolean;
  classifications: string[];
  complementsEnabled?: boolean;
  complementsGroupsIds?: string[];
  statistics?: ProductStatistics;
  availability?: BusinessSchedule;
  // transient
  complementsGroups?: WithId<ComplementGroup>[];
}
