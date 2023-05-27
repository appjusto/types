import { BasePayload } from '../../../payloads';
import { Card } from '../../card';
import { IuguCustomerPaymentMethod } from '../api/methods';

export interface IuguCard extends Card {
  processor: 'iugu';
  token: IuguCustomerPaymentMethod | null;
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
