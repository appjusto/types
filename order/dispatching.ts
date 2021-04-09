import firebase from 'firebase';

export type DispatchingStatus =
  | 'idle'
  | 'matching'
  | 'no-match'
  | 'matched'
  | 'declined'
  | 'confirmed'
  | 'unmatched';

export type DispatchingState =
  | 'going-pickup'
  | 'arrived-pickup'
  | 'going-destination'
  | 'arrived-destination';

export interface OrderLocationEntry {
  createdOn: firebase.firestore.FieldValue;
  coordinates: firebase.firestore.GeoPoint;
  dispatchingState: DispatchingState;
}
