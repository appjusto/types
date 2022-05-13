import { FieldValue } from 'firebase/firestore';
import { UserProfile } from './profile';

/**
 * @deprecated
 */
export type Role = 'owner' | 'staff' | 'viewer' | 'courier-manager';

export type AdminRole = 'owner' | 'manager' | 'collaborator';

/**
 * @deprecated
 */
export interface NewManagerData {
  email: string;
  role: Role | AdminRole;
}

export interface ManagerProfile extends UserProfile {
  lastBusinessId?: string | null;
  webAppVersion?: string;
}

export interface ManagerWithRole {
  id: string;
  email: string;
  role: AdminRole | null;
  createdOn: string;
  appVersion?: string;
}

export interface ManagerPrivatePlatform {
  claimsUpdated: FieldValue;
}
