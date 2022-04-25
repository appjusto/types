import { BasePayload } from '.';
import { NewManagerData } from '..';
import { NewUserData } from '../permissions';
import { NewStaffData } from '../staff';

export interface DeleteAccountPayload extends BasePayload {
  accountId?: string;
  notWorkingOnMyRegion?: boolean;
  didntFindWhatINeeded?: boolean;
  pricesHigherThanAlternatives?: boolean;
  didntLikeApp?: boolean;
  didntFeelSafe?: boolean;
  ratherUseAnotherApp?: boolean;
}

export interface UpdateEmailPayload extends BasePayload {
  accountId?: string;
  email: string;
}

export interface VerifyCourierProfilePayload extends BasePayload {}

export interface CreateManagersPayload extends BasePayload {
  type: 'managers' | 'staff';
  key?: string;
  /**
   * @deprecated
   */
  managers?: NewManagerData[];
  /**
   * @deprecated
   */
  staff?: NewStaffData;
  usersData: NewUserData[];
}

export interface GetManagersPayload extends BasePayload {
  type: 'managers' | 'staff';
  businessId?: string;
  staffId?: string;
}
