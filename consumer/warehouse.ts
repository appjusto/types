import { FieldValue, GeoPoint } from 'firebase/firestore';
import { ProfileSituation, ProfileTimestamps } from '..';

export type ConsumerWarehouse = {
  situation: ProfileSituation;
  email: string | null;
  notificationToken: string | null;
  coordinates: GeoPoint | null;
  timestamps: ProfileTimestamps;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
};
