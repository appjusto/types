import { UserProfile } from './profile';

export interface StaffProfile extends UserProfile {}

export type BackofficePermissionRules = [
  'create'?,
  'read'?,
  'update'?,
  'delete'?
];

export type BackofficePermissions = {
  [key: string]: BackofficePermissionRules;
};

export interface NewStaffData {
  email: string;
  permissions: BackofficePermissions;
}
