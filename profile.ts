import firebase from 'firebase';
import { Review } from './reviews';

export type ProfileSituation =
  | 'pending'
  | 'submitted'
  | 'approved'
  | 'rejected'
  | 'blocked'
  | 'deleted';

export interface UserProfile {
  situation: ProfileSituation;
  profileIssues?: string[];
  createdOn: firebase.firestore.Timestamp;
  updatedOn?: firebase.firestore.Timestamp;
  name?: string;
  email?: string;
  surname?: string;
  cpf?: string;
  phone?: string;
  notificationToken?: string | null;
  coordinates?: firebase.firestore.GeoPoint;
  reviews?: Review[];
}
