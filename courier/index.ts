import { BankAccount } from '../banking';
import { BusinessAddress } from '../business';
import { Timestamp } from '../external/firebase';
import { FleetDetails } from '../fleet';
import { WithId } from '../platform';
import { UserProfile } from '../profile';

export type CourierStatus =
  | 'unavailable'
  | 'available'
  | 'dispatching'
  | 'inactive';

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

/** @deprecated */
export interface CourierFleet extends WithId<FleetDetails> {
  joinedOn: Timestamp;
}

export interface CourierProfile extends UserProfile {
  status: CourierStatus;
  /** @deprecated */
  fleet?: CourierFleet;
  fleetsIds: string[];
  mode: CourierMode;
  statistics: CourierStatistics; // readonly
  documentType?: string;
  documentNumber?: string;
  documentValidity?: string;
  bankAccount?: BankAccount;
  company?: CourierCompany;
}

export interface AvailableCourier extends CourierProfile {
  id: string;
  distance: number;
}
