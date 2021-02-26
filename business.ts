import firebase from 'firebase';
import { LatLng, WithId } from './platform';
import { ProfileSituation } from './profile';

export interface Cuisine {
  name: string;
  imagePath?: string;
}

export interface BusinessAddress {
  cep: string;
  address: string;
  number?: string;
  additional?: string;
  city: string;
  state: string;
  latlng?: LatLng;
}

export interface BusinessStatistics {
  totalOrders: number;
  averagePreparationTime: number; // in seconds
  averageTicketPrice: number;
}

export interface BusinessPrivateStatistics {
  // averageOrderValue: number; // total revenue by number of orders
}

export type BusinessType = 'restaurant';
export type BusinessStatus = 'open' | 'closed';

export interface Business {
  type: BusinessType;
  name?: string;
  cnpj?: string;
  managers?: string[]; // emails
  businessAddress?: BusinessAddress;
  status: BusinessStatus;
  situation: ProfileSituation;
  cuisine?: WithId<Cuisine>;
  description?: string;
  minimumOrder?: number; // in cents
  orderAcceptanceTime?: number | null; // in minutes
  deliveryRange?: number; // in meters
  statistics?: BusinessStatistics;
  onboarding?: string;
  logoExists: boolean;
  coverImageExists: boolean;
  // metadata
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
