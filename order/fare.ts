import { Fleet } from '../fleet';
import { WithId } from '../platform';

export interface Fare {
  fleet: WithId<Fleet>;
  courier: FareDetails;
  business: FareDetails | null;
  platform: FareDetails | null;
  total: number;
}

export interface FareDetails {
  value: number; // in cents
  commission: number; // in cents
  financialFee: number; // in cents
}
