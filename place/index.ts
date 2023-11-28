import { Timestamp } from '../external/firebase';
import { LatLng } from '../platform';

export interface Address {
  main: string; // street, number
  secondary: string; // neighborhood, city - state, country
  description: string; // main - secondary
  googlePlaceId?: string;
}

export interface Place {
  accountId?: string;
  address: Address;
  additionalInfo?: string | null;
  instructions?: string;
  name?: string;
  geohash?: string | null;
  location?: LatLng | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
