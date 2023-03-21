import { Timestamp } from './external/firebase';
import { Fee } from './platform/fees';

export type AreaLogistics = 'appjusto' | 'external' | 'none';

export interface Area {
  city: string;
  state: string;
  neighborhood?: string;
  insurance?: Fee | null;
  logistics?: AreaLogistics;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
