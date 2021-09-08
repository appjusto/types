import firebase from 'firebase';
import { LatLng } from '../platform';

export interface Address {
  main?: string; // street, number
  secondary?: string; // neighborhood, city - state, country
  description: string; // main - secondary
  googlePlaceId?: string;
}

export interface Place {
  address: Address;
  additionalInfo?: string;
  intructions?: string;
  location?: LatLng;
  /**
   * @deprecated
   */
  estimatedTimeOfArrival?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  maxTimeOfArrival?: firebase.firestore.FieldValue;
  /**
   * @deprecated
   */
  timeOfArrival?: firebase.firestore.FieldValue;
}
