import { UserProfile } from './profile';

export interface StaffProfile extends UserProfile {}

export type BackofficePermissionRules = ['read'?, 'write'?, 'delete'?];

export type BackofficePermissions = {
  orders: BackofficePermissionRules;
  couriers: BackofficePermissionRules;
  consumers: BackofficePermissionRules;
  businesses: BackofficePermissionRules;
  platform: BackofficePermissionRules;
};

export interface NewStaffData {
  email: string;
  permissions: BackofficePermissions;
}
