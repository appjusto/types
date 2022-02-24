import firebase from 'firebase';
import { ProfileSituation, ProfileTimestamps } from '..';

export type ConsumerWarehouse = {
  situation: ProfileSituation;
  email: string | null;
  notificationToken: string | null;
  coordinates: firebase.firestore.GeoPoint | null;
  timestamps: ProfileTimestamps;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
};
