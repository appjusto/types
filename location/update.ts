import { GeoPoint, Timestamp } from '../external/firebase';
import { ClientFlavor } from '../platform';

export interface RNBGGeolocation {
  event: string;
  is_moving: boolean;
  uuid: string;
  timestamp: string;
  age: number;
  odometer: number;
  coords: {
    latitude: number;
    longitude: number;
    accuracy: number;
    speed: number;
    speed_accuracy: number;
    heading: number;
    heading_accuracy: number;
    altitude: number;
    ellipsoidal_altitude: number;
    altitude_accuracy: number;
    age: number;
  };
  activity: { type: string; confidence: number };
  battery: { is_charging: boolean; level: number };
  extras: {};
}

export interface LocationUpdate {
  coordinates?: GeoPoint;
  g?: {
    geopoint: GeoPoint;
    geohash: string;
  };
  flavor: ClientFlavor;
  accountId: string | null;
  orderId: string | null;
  details: RNBGGeolocation | null;
  createdAt: Timestamp;
}
