export interface VROrderPayments {
  processor: 'vr';
  paymentMethod: 'vr';
}

export interface PixOrderPayments {
  processor: 'iugu';
  paymentMethod: 'pix';
}

export interface CreditCardOrderPayments {
  processor: 'iugu';
  paymentMethod: 'credit_card';
  customerPaymentMethodId: string;
}

export type IuguOrderPayments = PixOrderPayments | CreditCardOrderPayments;
export type OrderPayments = VROrderPayments | IuguOrderPayments;
