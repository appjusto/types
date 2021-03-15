export type Flavor = 'courier' | 'consumer' | 'manager';

export interface PlatformParams {
  maxDistanceToOrigin: number; // in meters
  maxDistance: number; // in meters
  averageWaitingTime: number; // in seconds
}

export interface ServiceFee {
  platform: {
    fixed: number; // in cents
    percent: number;
  };
  taxes: number;
  processing: number;
}

export interface PlatformFees {
  p2p: ServiceFee;
  food: ServiceFee;
}

export interface PlatformStatistics {
  placedOrders: number;
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

export interface LatLng2 {
  lat: number;
  lng: number;
}

export type WithId<T extends object> = T & {
  id: string;
};
