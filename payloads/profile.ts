import { PayloadMeta } from '.';

export interface DeleteAccountPayload {
  notWorkingOnMyRegion: boolean;
  didntFindWhatINeeded: boolean;
  pricesHigherThanAlternatives: boolean;
  didntLikeApp: boolean;
  didntFeelSafe: boolean;
  ratherUseAnotherApp: boolean;
  meta: PayloadMeta;
}

export interface VerifyCourierProfilePayload {
  meta: PayloadMeta;
}

export interface CreateBusinessProfilePayload {
  meta: PayloadMeta;
}

export interface VerifyBusinessProfilePayload {
  businessId: string;
  meta: PayloadMeta;
}
