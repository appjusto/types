export interface PlatformParameters {
  maxDistance: number; // in meters
  deliveryFee: number; // in cents
  financialFee: number; // decimal number; ex: 0,01 corresponds to 1% transaction fee
  taxes: number; // also as a decimal number
}

export interface City {
  id: string;
  name: string;
}

export interface LatLng {
  latitude: number;
  longitude: number;
}
