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
