import { Address } from '..';
import { GeoPoint, Timestamp } from '../external/firebase';

export interface FraudPreventionParams {
  delayBeforeConfirm: number; // in seconds
  flaggedLocations: {
    distanceThreshold: number;
    limitNearby: number;
  };
  ticketPrice: {
    highThreshold: number;
  };
  newUser: {
    hoursAfterDelivery: number;
  };
  safeUser: {
    minimumOrders: number;
    afterDays: number;
  };
  manyOrders: {
    threshold: number;
    hours: number;
  };
}

export interface FlaggedLocation {
  coordinates: GeoPoint;
  address: Address;
  createdOn: Timestamp;
  g: {
    geopoint: GeoPoint;
    geohash: string;
  };
}
