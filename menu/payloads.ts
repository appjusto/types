import { BasePayload } from '../payloads';

export interface CloneComplementsGroupPayload extends BasePayload {
  businessId: string;
  groupId: string;
  name?: string;
}
