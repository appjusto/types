import { FieldValue, GeoPoint } from 'firebase/firestore';
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
  newUser: {
    hoursAfterDelivery: number;
  };
}

export interface FlaggedLocation {
  coordinates: GeoPoint;
  address: Address;
  createdOn: FieldValue;
}
