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
  notificationLastReceivedAt?: FieldValue;
  pix?: string;
  onboarded?: boolean;
  coordinates?: GeoPoint;
  g: {
    geopoint: GeoPoint;
    geohash: string;
  };
  state?: string;
  city?: string;
  isPasswordActive?: boolean;
  tags?: string[];
  nps: NPS;
  // metadata
  platform?: string;
  appVersion?: string;
  appInstallationId?: string | null;
  appIp?: string | null;
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
