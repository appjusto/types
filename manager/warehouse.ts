import { GeoPoint, Timestamp } from 'firebase/firestore';
import { ProfileSituation, ProfileTimestamps } from '..';

export type ManagerWarehouse = {
  name: string | null;
  email: string | null;
  phone: string | null;
  situation: ProfileSituation;
  businessIds: string[];
  businessRoles: string[];
  notificationToken: string | null;
  coordinates: GeoPoint | null;
  appVersion: string | null;
  timestamps: ProfileTimestamps;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
};
