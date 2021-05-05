import firebase from 'firebase';
import { BusinessAddress, BusinessStatistics } from './business';
import { ProductStatistics } from './menu/product';
import { LatLng2 } from './platform';

export interface AlgoliaConfig {
  appId: string;
  apiKey: string;
}
export interface BusinessAlgolia {
  objectID: string;
  _geoloc: LatLng2;
  enabled: boolean;
  name: string;
  code: string;
  situation: string;
  onboarding: string;
  description: string;
  status: string;
  businessAddress: BusinessAddress;
  cuisine: string;
  deliveryRange: number;
  statistics: BusinessStatistics;
  createdOn: firebase.firestore.FieldValue;
}

export interface CourierAlgolia {
  objectID: string;
  name: string;
  code: string;
  situation: string;
  status: string;
  createdOn: firebase.firestore.FieldValue;
}

export interface ConsumerAlgolia {
  objectID: string;
  name: string;
  surname: string;
  code: string;
  situation: string;
  totalOrders: number;
  createdOn: firebase.firestore.FieldValue;
}
export interface OrderAlgolia {
  objectID: string;
  type: string;
  code: string;
  businessId: string;
  consumerName: string;
  courierName: string;
  totalOrder: string;
  status: string;
  createdOn: firebase.firestore.FieldValue;
  date_timestamp: number;
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
  };
}
