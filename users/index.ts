import firebase from 'firebase';
import { Flavor } from '..';

export type UserType = 'consumer' | 'manager' | 'courier';

export interface User {
  lastSignInRequest: firebase.firestore.FieldValue;
  lastSignInFlavor?: Flavor;
  id: string | null;
  consumer?: {
    createdAt: firebase.firestore.FieldValue;
    deletedAt?: firebase.firestore.FieldValue | null;
  } | null;
  courier?: {
    createdAt: firebase.firestore.FieldValue;
    deletedAt?: firebase.firestore.FieldValue | null;
  } | null;
  manager?: {
    createdAt: firebase.firestore.FieldValue;
    deletedAt?: firebase.firestore.FieldValue | null;
  } | null;
  cpf?: string;
  phone?: string;
  blocked?: boolean;
  comment?: string;
}
