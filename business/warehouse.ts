import { FieldValue, GeoPoint } from 'firebase/firestore';
import { BusinessStatus } from '.';
import { ProfileSituation, ProfileTimestamps } from '..';

export type BusinessWarehouse = {
  name: string | null;
  cnpj: string | null;
  situation: ProfileSituation;
  status: BusinessStatus;
  enabled: boolean;
  shouldBeOpen: boolean;
  cuisine: string | null;
  averageCookingTime: number | null;
  averageDiscount: number | null;
  coordinates: GeoPoint | null;
  city: string | null;
  state: string | null;
  neighborhood: string | null;
  timestamps: ProfileTimestamps;
  createdOn: FieldValue;
  updatedOn: FieldValue | null;
};
