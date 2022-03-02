import { FieldValue, GeoPoint } from 'firebase/firestore';
import { ProfileSituation, ProfileTimestamps } from '..';

export type ConsumerWarehouse = {
  name: string | null;
  email: string | null;
  situation: ProfileSituation;
  notificationToken: string | null;
  appVersion: string | null;
  coordinates: GeoPoint | null;
  timestamps: ProfileTimestamps;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
};
