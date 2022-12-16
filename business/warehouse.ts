import {
  BusinessPhone,
  BusinessReviews,
  BusinessService,
  BusinessStatus,
} from '.';
import { ProfileSituation, ProfileTimestamps } from '..';
import { GeoPoint, Timestamp } from '../external/firebase';

export type BusinessWarehouse = {
  code: string | null;
  name: string | null;
  cnpj: string | null;
  slug: string | null;
  accountManagerId: string | null;
  situation: ProfileSituation;
  status: BusinessStatus;
  enabled: boolean;
  realtime: boolean;
  scheduled: boolean;
  deliveryRange: number;
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
  services: BusinessService[];
  timestamps: ProfileTimestamps;
  createdOn: Timestamp;
  updatedOn: Timestamp | null;
};
