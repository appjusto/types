import { UserProfile } from './profile';

export interface StaffProfile extends UserProfile {}

export type BackofficeAccessRules = ['read'?, 'write'?, 'delete'?];

export type BackofficeAccess = {
  orders: BackofficeAccessRules;
  couriers: BackofficeAccessRules;
  consumers: BackofficeAccessRules;
  businesses: BackofficeAccessRules;
  platform: BackofficeAccessRules;
};

export interface NewStaffData {
  email: string;
  access: BackofficeAccess;
}
