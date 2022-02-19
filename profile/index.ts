import firebase from 'firebase';
import { NPS } from '..';

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
  [K in ProfileSituation]?: firebase.firestore.FieldValue;
};

export interface UserProfile {
  code: string;
  email: string;
  situation: ProfileSituation;
  name?: string;
  surname?: string;
  cpf?: string;
  phone?: string;
  profileIssues?: string[];
  profileIssuesMessage?: string;
  notificationToken?: string | null;
  pix?: string;
  onboarded?: boolean;
  coordinates?: firebase.firestore.GeoPoint;
  state?: string;
  city?: string;
  isPasswordActive?: boolean;
  tags?: string[];
  nps: NPS;
  // metadata
  appVersion?: string;
  timestamps: ProfileTimestamps;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}

export interface ProfileNote {
  note: string;
  agentId: string;
  agentEmail: string;
  agentName?: string;
  createdOn: firebase.firestore.FieldValue;
  updatedOn: firebase.firestore.FieldValue;
}
