import { GeoPoint } from '../external/firebase';

export interface GeolocatedDocument {
  coordinates?: GeoPoint;
  g?: {
    geopoint: GeoPoint;
    geohash: string;
  };
}
