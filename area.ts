import { Timestamp } from './external/firebase';
import { Fee } from './platform/fees';

export interface Area {
  city: string;
  state: string;
  neighborhood?: string;
  insurance: Fee;
  createdOn?: Timestamp;
  updatedOn?: Timestamp;
}
