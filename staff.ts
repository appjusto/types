import { UserProfile } from './profile';

export interface StaffProfile extends UserProfile {}

type CRUD = 'create' | 'read' | 'update' | 'delete';

export type BackofficePermissionRules = CRUD[];

export type BackofficePermissions = {
  [key: string]: BackofficePermissionRules;
};

export interface NewStaffData {
  email: string;
  permissions: BackofficePermissions;
}
