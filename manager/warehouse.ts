import { FieldValue, GeoPoint } from 'firebase/firestore';
import { ProfileSituation, ProfileTimestamps } from '..';

export type ManagerWarehouse = {
  name: string | null;
  email: string | null;
  phone: string | null;
  situation: ProfileSituation;
  idsOfBusinessesManaged: string[];
  notificationToken: string | null;
  coordinates: GeoPoint | null;
  appVersion: string | null;
  timestamps: ProfileTimestamps;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
};
