import { Timestamp } from 'firebase/firestore';
import { Flavor } from '.';

export interface LoginLog {
  email: string;
  flavor: Flavor;
  signInAt: Timestamp;
  createdOn?: Timestamp;
}

export interface InterferenceLog {
  type: 'match-order' | 'drop-order' | 'outsource-delivery' | 'release-courier';
  by: string;
  orderId: string;
  extra?: {
    courierId: string;
  };
  comment: string | null;
  timestamp: Timestamp;
}
