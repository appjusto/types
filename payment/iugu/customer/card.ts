import { BasePayload } from '../../../payloads';

export interface SaveIuguCard extends BasePayload {
  cardTokenId: string;
  cardHash: string;
}
