import firebase from 'firebase';
import { Flavor } from '.';

export interface LoginLog {
  email: string;
  flavor: Flavor;
  signInAt: firebase.firestore.FieldValue;
  createdOn?: firebase.firestore.FieldValue;
}
