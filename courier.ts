import { UserProfile } from './profile';
import { Fleet } from './fleet';
import { WithId } from './platform';
import { IuguBankName, IuguMarketplaceAccount } from './payment/iugu';

export interface Bank {
  id: string;
  name: IuguBankName;
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
  marketPlace?: {
    account: IuguMarketplaceAccount;
    verified: boolean;
  };
  statistics: CourierStatistics;
}
