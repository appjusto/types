import firebase from 'firebase';
import { MarketplaceAccountInfo } from './payment/marketplace';
import { LatLng } from './platform';
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

export interface BusinessPrivatePlatform {
  marketPlace?: MarketplaceAccountInfo;
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
  marketplaceInfo?: MarketplaceAccountInfo;
  cuisine?: string; // cuisine's name
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
