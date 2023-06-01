import { BasePayload } from '../../payloads';

export interface SaveCardPayload extends BasePayload {}

export interface SaveCardResponse {
  id: string;
}
export interface DeleteCardPayload extends BasePayload {
  id: string;
}
