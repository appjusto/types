import { Timestamp } from '../../../external/firebase';
import { BasePayload } from '../../../payloads';

export interface IuguCard {
  accountId: string;
  accountType: 'consumer';
  cardTokenId: string | null;
  cardHash: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
export interface SaveIuguCard extends BasePayload {
  cardTokenId: string;
  cardHash: string;
}
export interface SaveIuguCardResponse {
  id: string;
}
export interface DeleteIuguCard extends BasePayload {
  id: string;
}
