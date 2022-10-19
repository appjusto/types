import { ProfileSituation, ProfileTimestamps } from '..';
import { GeoPoint, Timestamp } from '../external/firebase';
import { NotificationPreferences } from '../profile/notifications';

export type ConsumerWarehouse = {
  name: string | null;
  email: string | null;
  situation: ProfileSituation;
  notificationToken: string | null;
  notificationPreferences: NotificationPreferences | null;
  appVersion: string | null;
  appInstallationId: string | null;
  platform: string | null;
  coordinates: GeoPoint | null;
  timestamps: ProfileTimestamps;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
};
