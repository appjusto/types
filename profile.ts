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
  situation: ProfileSituation;
  email?: string;
  name?: string;
  surname?: string;
  cpf?: string;
  phone?: string;
  code?: string;
  profileIssues?: string[];
  profileIssuesMessage?: string;
  notificationToken?: string | null;
  pix?: string;
  onboarded?: boolean;
  coordinates?: firebase.firestore.GeoPoint;
  state?: string;
  city?: string;
  isPasswordActive?: boolean;
  // metadata
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
