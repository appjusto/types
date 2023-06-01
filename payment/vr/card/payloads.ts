import { SaveCardPayload } from '../../card/payloads';

export interface SaveVRCardPayload extends SaveCardPayload {
  processor: 'vr';
  name: string;
  number: string;
  month: number;
  year: number;
  cvv: string;
  cardHash: string;
}
