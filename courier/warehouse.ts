import firebase from 'firebase';
import { CourierMode, CourierStatus } from '.';
import { ProfileSituation, ProfileTimestamps } from '..';

export type CourierWarehouse = {
  situation: ProfileSituation;
  status: CourierStatus;
  email: string | null;
  notificationToken: string | null;
  coordinates: firebase.firestore.GeoPoint | null;
  city: string | null;
  state: string | null;
  mode: CourierMode;
  timestamps: ProfileTimestamps;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
};
