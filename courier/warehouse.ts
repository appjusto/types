import { GeoPoint, Timestamp } from 'firebase/firestore';
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
  fleet: {
    id: string;
    name: string;
  };
  appVersion: string | null;
  appInstallationId: string | null;
  timestamps: ProfileTimestamps;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
};
