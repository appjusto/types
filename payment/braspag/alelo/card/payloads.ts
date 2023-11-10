import { SaveCardPayload } from '../../../card/payloads';

export interface SaveAleloCardPayload extends SaveCardPayload {
  processor: 'braspag';
  name: string;
  number: string;
  month: number;
  year: number;
  cvv: string;
  hash?: string;
}
