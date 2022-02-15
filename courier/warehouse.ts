import firebase from 'firebase';
import { CourierMode, CourierStatus } from '.';
import { ProfileSituation, ProfileTimestamps } from '..';

export interface CourierWarehouse {
  situation: ProfileSituation;
  status: CourierStatus;
  timestamps: ProfileTimestamps;
  notificationToken: string | null;
  coordinates: firebase.firestore.GeoPoint | null;
  city: string | null;
  state: string | null;
  mode: CourierMode;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
