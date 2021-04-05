import firebase from 'firebase';
import { UserProfile } from './profile';

export interface ManagerProfile extends UserProfile {}

export interface ManagerPrivatePlatform {
  claimsUpdated: firebase.firestore.FieldValue;
}
