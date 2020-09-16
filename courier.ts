import { UserProfile } from './profile';
import { Fleet } from './fleet';
import { WithId } from './platform';

export interface Bank {
  id: string;
  name: string;
}

export type CourierStatus = 'unavailable' | 'available' | 'dispatching';

export interface CourierProfile extends UserProfile {
  status: CourierStatus;
  fleet?: WithId<Fleet>;
  bankAccount?: Bank & {
    agency: string;
    account: string;
    digit: string;
  };
}
