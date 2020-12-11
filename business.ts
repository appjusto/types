import { LatLng, WithId } from "./platform";
import { ProfileSituation } from "./profile";

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

export interface Business {
  name?: string;
  cnpj?: string;
  businessAddress?: BusinessAddress;
  status: 'open' | 'closed';
  situation: ProfileSituation;
  cuisine?: WithId<Cuisine>;
  description?: string;
  minimumOrder?: number; // in cents
  deliveryRange?: number; // in meters
}
