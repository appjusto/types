export type DispatchingState =
  | undefined
  | 'matching'
  | 'unmatched'
  | 'going-pickup'
  | 'arrived-pickup'
  | 'going-destination'
  | 'arrived-destination';

export interface OrderLocationEntry {
  createdOn: firebase.firestore.FieldValue;
  coordinates: firebase.firestore.GeoPoint;
  dispatchingState: DispatchingState;
}
