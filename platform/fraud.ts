import firebase from 'firebase';
import { Address } from '..';

export interface FraudPreventionParams {
  delayBeforeConfirm: number; // in seconds
  flaggedLocations: {
    distanceThreshold: number;
    limitNearby: number;
  };
  ticketPrice: {
    highThreshold: number;
  };
}

export interface FlaggedLocation {
  coordinates: firebase.firestore.GeoPoint;
  address: Address;
}
