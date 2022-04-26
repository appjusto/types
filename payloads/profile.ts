import { BasePayload } from '.';
import { NewManagerData } from '..';

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
  key: string;
  managers: NewManagerData[];
}

export interface GetBusinessManagersPayload extends BasePayload {
  businessId: string;
}
