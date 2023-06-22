import { BasePayload } from '../../payloads';

export interface RefundPaymentPayload extends BasePayload {
  action: 'refund';
  paymentId: string;
  value?: number;
}

export type UpdatePaymentPayload = RefundPaymentPayload;
