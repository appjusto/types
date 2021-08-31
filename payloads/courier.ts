import { BasePayload } from '.';

export interface ReleaseCourierPayload extends BasePayload {
  courierId: string;
  comment?: string;
}
