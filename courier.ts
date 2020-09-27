import { UserProfile } from './profile';
import { Fleet } from './fleet';
import { WithId } from './platform';

export interface Bank {
  id: string;
  name: string;
}

export type CourierStatus = 'unavailable' | 'available' | 'dispatching';
export type CourierMode =
  | 'motocycle'
  | 'bicycle'
  | 'scooter'
  | 'car'
  | 'walking';

export interface CourierStatistics {
  deliveries: number;
  canceled: number;
}

export interface CourierProfile extends UserProfile {
  status: CourierStatus;
  mode?: CourierMode;
  fleet?: WithId<Fleet>;
  bankAccount?: Bank & {
    agency: string;
    account: string;
    digit: string;
  };
  statistics: CourierStatistics;
}
