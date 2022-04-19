import { UserProfile } from './profile';

export interface StaffProfile extends UserProfile {}

export type BackofficePermissionRules = ['read'?, 'write'?, 'delete'?];

export type BackofficePermissions = {
  [key: string]: BackofficePermissionRules;
};

export interface NewStaffData {
  email: string;
  permissions: BackofficePermissions;
}
