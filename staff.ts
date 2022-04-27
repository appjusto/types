import { UserPermissions } from './permissions';
import { UserProfile } from './profile';

export interface StaffProfile extends UserProfile {}

/**
 * @deprecated
 */
export interface NewStaffData {
  email: string;
  permissions: UserPermissions;
}
