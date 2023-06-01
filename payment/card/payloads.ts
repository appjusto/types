import { PaymentProcessor } from '..';
import { BasePayload } from '../../payloads';

export interface SaveCardPayload extends BasePayload {
  processor: PaymentProcessor;
}

export interface SaveCardResponse {
  id: string;
}
export interface DeleteCardPayload extends BasePayload {
  id: string;
}
