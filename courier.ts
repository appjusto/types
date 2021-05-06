import firebase from 'firebase';
import { BankAccount } from './banking';
import { BusinessAddress } from './business';
import { Fleet } from './fleet';
import { MarketplaceAccountInfo } from './payment/marketplace';
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
  mode?: CourierMode;
  fleet?: Omit<WithId<Fleet>, 'participantsOnline'> & {
    joinedOn: firebase.firestore.FieldValue;
  };
  bankAccount?: BankAccount;
  company?: CourierCompany;
  statistics?: CourierStatistics; // readonly
  ongoingOrderId?: string | null; // readonly
}

export interface CourierPrivatePlatform {
  marketPlace?: MarketplaceAccountInfo;
}

export interface AvailableCourier extends CourierProfile {
  id: string;
  distance: number;
}
