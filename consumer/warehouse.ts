import firebase from 'firebase';
import { ProfileSituation } from '..';

export type ConsumerWarehouse = {
  situation: ProfileSituation;
  notificationToken: string | null;
  coordinates: firebase.firestore.GeoPoint | null;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
} & { [K in ProfileSituation]: string };
