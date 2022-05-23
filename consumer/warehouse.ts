import { FieldValue, GeoPoint } from 'firebase/firestore';
import { ProfileSituation, ProfileTimestamps } from '..';
import { NotificationPreferences } from '../profile/notifications';

export type ConsumerWarehouse = {
  name: string | null;
  email: string | null;
  situation: ProfileSituation;
  notificationToken: string | null;
  notificationPreferences: NotificationPreferences | null;
  appVersion: string | null;
  platform: string | null;
  coordinates: GeoPoint | null;
  timestamps: ProfileTimestamps;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
};
