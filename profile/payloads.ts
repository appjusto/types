import { BasePayload } from '../payloads';
import { ClientFlavor } from '../platform';

export interface UpdateCodePayload extends BasePayload {
  code: string;
  flavor: ClientFlavor;
}
