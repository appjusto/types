import firebase from 'firebase';
import { CourierMode, CourierStatus } from '.';
import { ProfileSituation } from '..';

export type CourierWarehouse = {
  situation: ProfileSituation;
  status: CourierStatus;
  notificationToken: string | null;
  coordinates: firebase.firestore.GeoPoint | null;
  city: string | null;
  state: string | null;
  mode: CourierMode;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
} & { [K in ProfileSituation]: string };
