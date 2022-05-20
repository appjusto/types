import { FieldValue, GeoPoint } from 'firebase/firestore';
import { Issue, NPS } from '..';
import { NotificationPreferences } from './notifications';

export type ProfileSituation =
  | 'pending'
  | 'submitted'
  | 'verified'
  | 'invalid'
  | 'approved'
  | 'rejected'
  | 'blocked'
  | 'deleted';

export type ProfileTimestamps = {
  [K in ProfileSituation]?: FieldValue;
};

export interface UserProfile {
  code: string;
  email: string;
  situation: ProfileSituation;
  name?: string;
  surname?: string;
  cpf?: string;
  phone?: string | null;
  countryCode?: string;
  profileIssues?: string[] | Issue[];
  profileIssuesMessage?: string;
  notificationToken?: string | null;
  notificationPreferences?: NotificationPreferences;
  pix?: string;
  onboarded?: boolean;
  coordinates?: GeoPoint;
  state?: string;
  city?: string;
  isPasswordActive?: boolean;
  tags?: string[];
  nps: NPS;
  // metadata
  appVersion?: string;
  platform?: string;
  userAgent?: string;
  timestamps: ProfileTimestamps;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
}

export interface ProfileNote {
  note: string;
  staffId: string;
  staffEmail: string;
  staffName?: string;
  createdOn: FieldValue;
  updatedOn: FieldValue;
}
