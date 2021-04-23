import firebase from 'firebase';

export type ProfileSituation =
  | 'pending'
  | 'submitted'
  | 'verified'
  | 'invalid'
  | 'approved'
  | 'rejected'
  | 'blocked'
  | 'deleted';
export interface UserProfile {
  code?: string;
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
  pix?: string;
  onboarded?: boolean;
}
