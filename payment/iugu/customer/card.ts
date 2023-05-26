import { BasePayload } from '../../../payloads';

export interface SaveIuguCard extends BasePayload {
  cardTokenId: string;
  cardHash: string;
}
export interface SaveIuguCardResponse extends BasePayload {
  cardTokenId: string;
}

export interface IuguCard {
  accountId: string;
  accountType: 'consumer';
  cardTokenId: string;
  cardHash: string;
}
