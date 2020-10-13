import firebase from 'firebase';

export type ProfileSituation =
  | 'pending'
  | 'submitted'
  | 'approved'
  | 'rejected'
  | 'blocked'
  | 'deleted';

export interface UserProfile {
  situation: ProfileSituation;
  createdOn: firebase.firestore.Timestamp;
  updatedOn?: firebase.firestore.Timestamp;
  name?: string;
  surname?: string;
  cpf?: string;
  phone?: {
    ddd: string;
    number: string;
  };
  notificationToken?: string | null;
  coordinates?: firebase.firestore.GeoPoint;
}
