import firebase from 'firebase';
import { UserProfile } from './profile';

export type Role = 'owner' | 'staff' | 'viewer' | 'courier-manager';
export type AdminRole = 'manager' | 'collaborator';

export interface NewManagerData {
  email: string;
  role: Role | AdminRole;
}

export interface ManagerProfile extends UserProfile {}

export interface ManagerPrivatePlatform {
  claimsUpdated: firebase.firestore.FieldValue;
}
