import { BusinessAddress, BusinessStatistics } from './business';
import { ProductStatistics } from './menu/product';
import { LatLng2 } from './platform';

export interface BusinessAlgolia {
  objectID: string;
  _geoloc: LatLng2;
  name: string;
  description: string;
  status: string;
  businessAddress: BusinessAddress;
  cuisine: {
    id: string;
    name: string;
  };
  deliveryRange: number;
  statistics: BusinessStatistics;
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
    name: string;
    statistics: BusinessStatistics;
  };
}
