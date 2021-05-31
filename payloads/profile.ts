import { BasePayload } from '.';

export interface DeleteAccountPayload extends BasePayload {
  notWorkingOnMyRegion: boolean;
  didntFindWhatINeeded: boolean;
  pricesHigherThanAlternatives: boolean;
  didntLikeApp: boolean;
  didntFeelSafe: boolean;
  ratherUseAnotherApp: boolean;
}

export interface VerifyCourierProfilePayload extends BasePayload {}

export interface CreateBusinessProfilePayload extends BasePayload {}

export interface VerifyBusinessProfilePayload extends BasePayload {
  businessId: string;
}
