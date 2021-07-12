import firebase from 'firebase';
import { Flavor } from '.';

export interface LoginLog {
  email: string;
  flavor: Flavor;
  signInAt: firebase.firestore.FieldValue;
  createdOn?: firebase.firestore.FieldValue;
}

export interface InterferenceLog {
  type: 'match-order' | 'drop-order' | 'outsource-delivery';
  by: string;
  orderId: string;
  extra?: {
    courierId: string;
  };
  comment: string | null;
  timestamp: firebase.firestore.FieldValue;
}
