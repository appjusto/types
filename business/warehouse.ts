import firebase from 'firebase';
import { BusinessSchedule, BusinessStatus } from '.';
import { ProfileSituation, ProfileTimestamps } from '..';

export interface BusinessWarehouse {
  situation: ProfileSituation;
  status: BusinessStatus;
  enabled: boolean;
  cuisine: string | null;
  averageCookingTime: number | null;
  schedules: BusinessSchedule | null;
  averageDiscount: number | null;
  timestamps: ProfileTimestamps;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
