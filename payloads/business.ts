import { BasePayload } from '.';

export interface CloneBusinessPayload extends BasePayload {
  businessId: string;
}

export interface CloneComplementsGroupPayload extends BasePayload {
  businessId: string;
  groupId: string;
  name?: string;
}
