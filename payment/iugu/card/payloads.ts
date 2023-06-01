import { SaveCardPayload } from '../../card/payloads';

export interface SaveIuguCardPayload extends SaveCardPayload {
  processor: 'iugu';
  cardTokenId: string;
  cardHash: string;
}
