import { UserProfile } from './profile';
import { Fleet } from './fleet';

export interface Bank {
  id: string;
  name: string;
}

export type CourierStatus = 'unavailable' | 'available' | 'dispatching';

export interface CourierProfile extends UserProfile {
  status?: CourierStatus;
  fleet?: Fleet;
  bankAccount?: Bank & {
    agency: string;
    account: string;
    digit: string;
  };
}
