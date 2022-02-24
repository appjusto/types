import { BasePayload } from '.';
import { IuguPaymentToken } from '../payment/iugu';

export interface SavePaymentTokenPayload extends BasePayload {
  cpf?: string;
  paymentToken: IuguPaymentToken;
}

export interface SavePaymentTokenResponse {
  paymentMethodId: string;
}

export interface DeletePaymentMethodPayload extends BasePayload {
  paymentMethodId: string;
}
