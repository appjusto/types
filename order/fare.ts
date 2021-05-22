import { FleetDetails } from '../fleet';
import { WithId } from '../platform';

export interface Fare {
  fleet: WithId<FleetDetails>;
  courier: FareDetails;
  business: FareDetails | null;
  platform: FareDetails | null;
}

export interface FareDetails {
  value: number; // in cents
  comission: number; // in cents
  financialFee: number; // in cents
}
