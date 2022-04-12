import { FieldValue } from 'firebase/firestore';
import { UserProfile } from './profile';

/**
 * @deprecated
 */
export type Role = 'owner' | 'staff' | 'viewer' | 'courier-manager';

export type AdminRole = 'manager' | 'collaborator';

export interface NewManagerData {
  email: string;
  role: Role | AdminRole;
}

export interface ManagerProfile extends UserProfile {}

export interface ManagerPrivatePlatform {
  claimsUpdated: FieldValue;
}

export type BackofficeAccessRules = ['read'?, 'write'?, 'delete'?];

export type BackofficeAccess = {
  orders: BackofficeAccessRules;
  couriers: BackofficeAccessRules;
  consumers: BackofficeAccessRules;
  businesses: BackofficeAccessRules;
  platform: BackofficeAccessRules;
};

export interface NewAgentData {
  email: string;
  access: BackofficeAccess;
}
