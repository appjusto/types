import { BankAccount } from './banking';
import { BusinessAddress } from './business';
import { Fleet } from './fleet';
import { IuguMarketplaceAccountInfo } from './payment/iugu';
import { WithId } from './platform';
import { UserProfile } from './profile';

export type CourierStatus = 'unavailable' | 'available' | 'dispatching';
export type CourierMode =
  | 'motocycle'
  | 'bicycling'
  | 'scooter'
  | 'car'
  | 'walking';

export interface CourierStatistics {
  deliveries: number;
  canceled: number;
  rejected: number;
  positiveReviews: number;
  negativeReviews: number;
}

export interface CourierCompany extends BusinessAddress {
  cnpj: string;
  name: string;
}

export interface CourierProfile extends UserProfile {
  status: CourierStatus;
  ongoingOrderId?: string | null;
  mode?: CourierMode;
  fleet?: WithId<Fleet>;
  bankAccount?: BankAccount;
  marketPlace?: IuguMarketplaceAccountInfo;
  company?: CourierCompany;
  statistics?: CourierStatistics;
}

export interface AvailableCourier extends CourierProfile {
  id: string;
  distance: number;
}
