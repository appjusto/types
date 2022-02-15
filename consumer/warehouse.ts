import firebase from 'firebase';
import { ProfileSituation, ProfileTimestamps } from '..';

export interface ConsumerWarehouse {
  situation: ProfileSituation;
  timestamps: ProfileTimestamps;
  notificationToken: string | null;
  coordinates: firebase.firestore.GeoPoint | null;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
