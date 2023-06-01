import { SaveCardPayload } from '../../card/payloads';

export interface SaveIuguCardPayload extends SaveCardPayload {
  cardTokenId: string;
  cardHash: string;
}
