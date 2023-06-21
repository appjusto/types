import { BasePayload } from '../../payloads';

export interface RefundPaymentPayload extends BasePayload {
  action: 'refund';
  paymentId: string;
  value?: number;
  from?: 'business' | 'platform';
}

export type UpdatePaymentPayload = RefundPaymentPayload;
