import { Timestamp } from '../external/firebase';
import { WithId } from '../platform';
import { UserProfile } from '../profile';

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

export type ManagerRoles = {
  [key: string]: AdminRole;
};

export interface ManagerProfile extends UserProfile {
  roles?: ManagerRoles;
  lastBusinessId?: string | null;
  webAppVersion?: string;
  desktopAppVersion?: string;
}

export interface ManagerWithMetadata extends WithId<ManagerProfile> {
  role: AdminRole | null;
}

export interface ManagerWithRole {
  id: string;
  email: string;
  role: AdminRole | null;
  createdOn: string;
  appVersion?: string;
  webAppVersion?: string;
}

export interface ManagerPrivatePlatform {
  claimsUpdated: Timestamp;
}
