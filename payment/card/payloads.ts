import { PaymentProcessor } from '..';
import { BasePayload } from '../../payloads';

export interface SaveCardPayload extends BasePayload {
  processor: PaymentProcessor;
}

export interface SaveIuguCardPayload extends SaveCardPayload {
  processor: 'iugu';
  cardTokenId: string;
  cardHash: string;
}

export interface SaveCardResponse {
  id: string;
}
export interface DeleteCardPayload extends BasePayload {
  id: string;
}
