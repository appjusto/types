import { GeoPoint, Timestamp } from 'firebase/firestore';
import { BusinessPhone, BusinessReviews, BusinessStatus } from '.';
import { ProfileSituation, ProfileTimestamps } from '..';

export type BusinessWarehouse = {
  code: string | null;
  name: string | null;
  cnpj: string | null;
  slug: string | null;
  accountManagerId: string | null;
  situation: ProfileSituation;
  status: BusinessStatus;
  enabled: boolean;
  shouldBeOpen: boolean;
  cuisine: string | null;
  averageCookingTime: number | null;
  averageDiscount: number | null;
  coordinates: GeoPoint | null;
  phones: BusinessPhone[] | null;
  city: string | null;
  state: string | null;
  neighborhood: string | null;
  reviews: BusinessReviews;
  timestamps: ProfileTimestamps;
  createdOn: Timestamp;
  updatedOn: Timestamp | null;
};
