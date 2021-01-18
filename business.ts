import firebase from 'firebase';
import { LatLng, WithId } from './platform';
import { ProfileSituation } from './profile';

export interface Cuisine {
  name: string;
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
  totalOrders?: number;
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
  deliveryRange?: number; // in meters
  statistics?: BusinessStatistics;
  onboarding?: string;
  logo_url?: string | null;
  cover_url?: string | null;
  // metadata
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
