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
  name: string;
  code: string;
  email: string;
  situation: string;
  status: string;
  courierAddress: {
    cep: string;
    address: string;
    number: string;
    additional: string;
    city: string;
    state: string;
    _geoloc: LatLng2;
  };
  createdOn: firebase.firestore.FieldValue;
}

export interface ConsumerAlgolia {
  objectID: string;
  name?: string;
  surname?: string;
  email: string;
  code?: string;
  situation: string;
  totalOrders: number;
  createdOn: firebase.firestore.FieldValue;
}
export interface OrderAlgolia {
  objectID: string;
  type: string;
  code: string;
  businessId?: string;
  consumerName: string;
  courierName?: string;
  courierValue?: number;
  businessValue?: number;
  totalOrder?: number;
  status: string;
  createdOn: number;
  confirmedOn: number;
  deliveredOn: number;
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
