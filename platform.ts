export type Flavor = 'courier' | 'consumer';

export interface PlatformParams {
  maxDistanceToOrigin: number; // in meters
  maxDistance: number; // in meters
  deliveryFee: number; // in cents
  financialFee: number; // decimal number; ex: 0,01 corresponds to 1% transaction fee
  taxes: number; // also as a decimal number
}

export interface PlatformStatistics {
  totalOrders: number;
}

export interface City {
  id: string;
  name: string;
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export type WithId<T extends object> = T & {
  id: string;
};
