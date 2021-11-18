import firebase from 'firebase';
import { BusinessSchedule } from '.';
import {
  BusinessAddress,
  BusinessStatistics,
  BusinessStatus,
} from './business';
import { ProductStatistics } from './menu/product';
import { LatLng2 } from './platform';

export interface AlgoliaConfig {
  appId: string;
  apiKey: string;
}
export interface BusinessAlgolia {
  objectID: string;
  _geoloc: LatLng2 | null;
  enabled: boolean;
  name?: string;
  code?: string;
  cnpj?: string;
  managerEmail?: string;
  situation: string;
  onboarding?: string;
  description?: string;
  status: BusinessStatus;
  businessAddress?: BusinessAddress;
  cuisine?: string;
  deliveryRange?: number;
  statistics?: BusinessStatistics;
  schedules: BusinessSchedule;
  createdOn: firebase.firestore.FieldValue;
}

export interface CourierAlgolia {
  objectID: string;
  name?: string;
  code?: string;
  email: string;
  cpf?: string;
  situation: string;
  status: string;
  courierAddress: {
    cep?: string;
    address?: string;
    number?: string;
    additional?: string;
    city?: string;
    state?: string;
    _geoloc: LatLng2 | null;
  };
  createdOn: firebase.firestore.FieldValue;
}

export interface ConsumerAlgolia {
  objectID: string;
  name?: string;
  surname?: string;
  email: string;
  cpf?: string;
  code?: string;
  situation: string;
  totalOrders: number;
  createdOn: firebase.firestore.FieldValue;
}

export interface ProductAlgolia {
  objectID: string;
  _geoloc: LatLng2;
  name: string;
  description: string;
  classifications: string[];
  enabled: boolean;
  price: number;
  statistics: ProductStatistics;
  business: {
    id: string;
    name: string;
    statistics: BusinessStatistics;
    enabled: boolean;
  };
}
