import { BasePayload } from '../payloads';

export interface CloneComplementsGroupPayload extends BasePayload {
  businessId: string;
  groupId: string;
  name?: string;
}

export interface ImportMenuPayload extends BasePayload {
  url: string;
  businessId: string;
  discount: number;
}
