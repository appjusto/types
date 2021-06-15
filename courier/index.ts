import firebase from 'firebase';
import { BankAccount } from '../banking';
import { BusinessAddress } from '../business';
import { FleetDetails } from '../fleet';
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

export interface CourierFleet extends WithId<FleetDetails> {
  joinedOn: firebase.firestore.FieldValue;
}

export interface CourierProfile extends UserProfile {
  status: CourierStatus;
  documentType?: string;
  documentNumber?: string;
  documentValidity?: string;
  mode?: CourierMode;
  fleet?: CourierFleet;
  bankAccount?: BankAccount;
  company?: CourierCompany;
  statistics?: CourierStatistics; // readonly
  ongoingOrderId?: string | null; // readonly
}

export interface AvailableCourier extends CourierProfile {
  id: string;
  distance: number;
}
