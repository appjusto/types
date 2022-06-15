import { BasePayload } from '../payloads';

export interface EmailTaskPayloadFrom {
  name: string;
  email: string;
}

export interface EmailTaskPayload {
  email: string;
  templateId: string;
  from?: EmailTaskPayloadFrom;
  templateData?: object;
}

export interface OrderFraudEmailPayload extends BasePayload {
  template: 'order-fraud';
  orderId: string;
}

export type EmailPayload = OrderFraudEmailPayload;
