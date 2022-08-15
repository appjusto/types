import { BankAccount } from '../banking';
import { BusinessAddress } from '../business';
import { WithId } from '../platform';
import { UserProfile } from '../profile';

export type CourierStatus = 'unavailable' | 'available' | 'dispatching';
export type CourierMode =
  | 'motorcycle'
  | 'bicycling'
  | 'scooter'
  | 'car'
  | 'walking';

export interface CourierServiceStatistics {
  deliveries: number;
  averageTicket: number;
}

export interface CourierStatistics {
  deliveries: number;
  canceled: number;
  rejected: number;
  positiveReviews: number;
  negativeReviews: number;
  p2p: CourierServiceStatistics;
  food: CourierServiceStatistics;
}

export interface CourierCompany extends BusinessAddress {
  cnpj: string;
  name: string;
}

export interface CourierProfile extends UserProfile {
  status: CourierStatus;
  fleetsIds: string[];
  mode: CourierMode;
  statistics: CourierStatistics; // readonly
  documentType?: string;
  documentNumber?: string;
  documentValidity?: string;
  bankAccount?: BankAccount;
  company?: CourierCompany;
  /** @deprecated */
  ongoingOrderId?: string | null; // readonly
}

export interface AvailableCourier extends WithId<CourierProfile> {
  distance: number;
}
