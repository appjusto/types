import { BasePayload } from '.';
import { AdminRole, Role } from '../managers';

export interface DeleteAccountPayload extends BasePayload {
  accountId?: string;
  notWorkingOnMyRegion: boolean;
  didntFindWhatINeeded: boolean;
  pricesHigherThanAlternatives: boolean;
  didntLikeApp: boolean;
  didntFeelSafe: boolean;
  ratherUseAnotherApp: boolean;
}

export interface UpdateEmailPayload extends BasePayload {
  accountId?: string;
  email: string;
}

export interface VerifyCourierProfilePayload extends BasePayload {}

export interface CreateBusinessProfilePayload extends BasePayload {}

export interface UpdateBusinessSlugPayload extends BasePayload {
  businessId: string;
  slug: string;
}

export interface CreateManagerPayload extends BasePayload {
  email: string;
  key: string;
  role: AdminRole | Role;
}

export interface VerifyBusinessProfilePayload extends BasePayload {
  businessId: string;
}

export interface GetBusinessManagersPayload extends BasePayload {
  businessId: string;
}
