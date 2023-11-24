import { Issue, NPS } from '..';
import { Timestamp } from '../external/firebase';
import { GeolocatedDocument } from '../location';
import { NotificationPreferences } from './notifications';
import { ProfileTag } from './tags';

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
  [K in ProfileSituation]?: Timestamp;
} & {
  firstApproved?: Timestamp;
};

export interface InstallReferrer {
  utm_campaign?: string;
  utm_medium?: string;
  utm_source?: string;
  updatedAt?: Timestamp;
  installedAt?: Timestamp | null;
}
export interface UserProfile extends GeolocatedDocument {
  code: string;
  email: string;
  situation: ProfileSituation;
  name?: string;
  surname?: string;
  birthday?: string;
  about?: string;
  cpf?: string;
  phone?: string | null;
  countryCode?: string;
  profileIssues?: string[] | Issue[];
  profileIssuesMessage?: string;
  notificationToken?: string | null;
  notificationPreferences?: NotificationPreferences;
  notificationPreferencesToken?: string;
  notificationLastReceivedAt?: Timestamp;
  pix?: string;
  onboarded?: boolean;
  state?: string;
  city?: string;
  isPasswordActive?: boolean;
  tags?: ProfileTag[];
  nps: NPS;
  // metadata
  isAnonymous?: boolean;
  platform?: string;
  appVersion?: string;
  webAppVersion?: string;
  appInstallationId?: string | null;
  installReferrer?: InstallReferrer | null;
  appIp?: string | null;
  userAgent?: string;
  timestamps: ProfileTimestamps;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}

export interface ProfileNote {
  note: string;
  staffId?: string;
  staffEmail?: string;
  staffName?: string;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}
