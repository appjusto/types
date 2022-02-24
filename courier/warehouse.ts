import { FieldValue, GeoPoint } from 'firebase/firestore';
import { CourierMode, CourierStatus } from '.';
import { ProfileSituation, ProfileTimestamps } from '..';

export type CourierWarehouse = {
  situation: ProfileSituation;
  status: CourierStatus;
  email: string | null;
  notificationToken: string | null;
  coordinates: GeoPoint | null;
  city: string | null;
  state: string | null;
  mode: CourierMode;
  timestamps: ProfileTimestamps;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
};
