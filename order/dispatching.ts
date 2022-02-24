import { FieldValue, GeoPoint } from 'firebase/firestore';

export type DispatchingStatus =
  | 'idle'
  | 'scheduled'
  | 'matching'
  | 'no-match'
  | 'matched'
  | 'declined'
  | 'confirmed'
  | 'outsourced';

export type DispatchingState =
  | 'going-pickup'
  | 'arrived-pickup'
  | 'going-destination'
  | 'arrived-destination';

export interface OrderLocationEntry {
  createdOn: FieldValue;
  coordinates: GeoPoint;
  dispatchingState: DispatchingState;
}
