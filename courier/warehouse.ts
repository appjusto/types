import { FieldValue, GeoPoint } from 'firebase/firestore';
import { CourierMode, CourierStatus } from '.';
import { ProfileSituation, ProfileTimestamps } from '..';

export type CourierWarehouse = {
  name: string | null;
  email: string | null;
  phone: string | null;
  situation: ProfileSituation;
  status: CourierStatus;
  notificationToken: string | null;
  coordinates: GeoPoint | null;
  city: string | null;
  state: string | null;
  mode: CourierMode;
  appVersion: string | null;
  timestamps: ProfileTimestamps;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
};
