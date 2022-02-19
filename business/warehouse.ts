import firebase from 'firebase';
import { BusinessStatus } from '.';
import { ProfileSituation, ProfileTimestamps } from '..';

export type BusinessWarehouse = {
  situation: ProfileSituation;
  status: BusinessStatus;
  enabled: boolean;
  // shouldBeOpen: boolean;
  cuisine: string | null;
  averageCookingTime: number | null;
  averageDiscount: number | null;
  city: string | null;
  state: string | null;
  neighborhood: string | null;
  timestamps: ProfileTimestamps;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
};
