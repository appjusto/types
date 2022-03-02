import firebase from 'firebase';
import { ProfileSituation, ProfileTimestamps } from '..';

export type ConsumerWarehouse = {
  name: string | null;
  email: string | null;
  situation: ProfileSituation;
  notificationToken: string | null;
  coordinates: firebase.firestore.GeoPoint | null;
  appVersion: string | null;
  timestamps: ProfileTimestamps;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
};
