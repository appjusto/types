import { UserProfile } from './profile';
import { Fleet } from './fleet';
import { WithId } from './platform';
import {
  IuguMarketplaceAccount,
  IuguMarketplaceAccountTokens,
  IuguMarketplaceAccountVerification,
} from './payment/iugu';
import { BankAccount } from './banking';
import { BusinessAddress } from './business';

export type CourierStatus = 'unavailable' | 'available' | 'dispatching';
export type CourierMode =
  | 'motocycle'
  | 'bicycle'
  | 'scooter'
  | 'car'
  | 'walking';

export interface CourierStatistics {
  deliveries?: number;
  canceled?: number;
  rejected?: number;
}

export interface CourierCompany extends BusinessAddress {
  cnpj: string;
  name: string;
}

export interface CourierProfile extends UserProfile {
  status: CourierStatus;
  mode?: CourierMode;
  fleet?: WithId<Fleet>;
  bankAccount?: BankAccount;
  marketPlace?: {
    situation: 'created' | 'configured' | 'requested-verification' | 'verified';
    tokens: IuguMarketplaceAccountTokens;
    account?: IuguMarketplaceAccount;
    verification?: IuguMarketplaceAccountVerification;
  };
  company?: CourierCompany;
  statistics?: CourierStatistics;
}

export interface AvailableCourier extends CourierProfile {
  id: string;
  distance: number;
}
