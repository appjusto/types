import { BasePayload } from '.';
import { NewManagerData } from '..';
import { NewAgentData } from '../managers';

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
  type: 'managers' | 'agents';
  key?: string;
  managers?: NewManagerData[];
  agent?: NewAgentData;
}

export interface GetManagersPayload extends BasePayload {
  type: 'managers' | 'agents';
  businessId?: string;
  agentId?: string;
}
