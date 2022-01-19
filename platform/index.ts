export type Flavor =
  | 'courier'
  | 'consumer'
  | 'business'
  | 'backoffice'
  | 'platform';

export type OutsourceAccountType = 'business' | 'platform';

export type Environment = 'dev' | 'staging' | 'live' | 'community';

export interface City {
  id: string;
  name: string;
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface LatLng2 {
  lat: number;
  lng: number;
}

export type WithId<T extends object> = T & {
  id: string;
};
