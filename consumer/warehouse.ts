import { InstallReferrer, ProfileSituation, ProfileTimestamps } from '..';
import { GeoPoint, Timestamp } from '../external/firebase';

export type ConsumerWarehouse = {
  name: string | null;
  email: string | null;
  situation: ProfileSituation;
  notificationToken: string | null;
  acceptsGeneralNotification: boolean;
  acceptsMarketingNotification: boolean;
  acceptsStatusNotification: boolean;
  appVersion: string | null;
  appInstallationId: string | null;
  totalOrders: number | null;
  platform: string | null;
  coordinates: GeoPoint | null;
  installReferrer?: InstallReferrer | null;
  timestamps: ProfileTimestamps;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
};
