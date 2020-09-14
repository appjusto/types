import firebase from 'firebase';

export type ProfileSituation =
  | 'pending'
  | 'submitted'
  | 'approved'
  | 'rejected'
  | 'blocked';

export interface UserProfile {
  id?: string;
  name?: string;
  surname?: string;
  cpf?: string;
  phone?: {
    ddd: string;
    number: string;
  };
  notificationToken?: string | null;
  situation?: ProfileSituation;
  coordinates?: firebase.firestore.GeoPoint;
  createdOn?: firebase.firestore.Timestamp;
}
