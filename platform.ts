export type Flavor = 'courier' | 'consumer' | 'manager';
export type Environment = 'dev' | 'staging' | 'live' | 'local';

export interface PlatformParams {
  maxDistanceToOrigin: number; // in meters
  maxDistance: number; // in meters
  averageCookingTime: number; // in seconds
  averageWaitingTime: number; // in seconds
  courier: {
    approveAfterVerified: boolean;
  };
  business: {
    approveAfterVerified: boolean;
  };
  maintenance: {
    backupsEnabled: boolean;
  };
}

export interface ServiceFee {
  platform: {
    fixed: number; // in cents
    percent: number;
  };
  taxes: number;
  processing: {
    fixed: number; // in cents
    percent: number;
  };
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
