import { LatLng } from '../platform';

export interface Address {
  main?: string; // street, number
  secondary?: string; // neighborhood, city - state, country
  description: string; // main - secondary
  googlePlaceId?: string;
}

export interface Place {
  address: Address;
  additionalInfo?: string;
  instructions?: string;
  name?: string;
  geohash?: string | null;
  location?: LatLng | null;
}
