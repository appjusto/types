import { IuguPayableWith } from './iugu';

export type PaymentProcessor = 'iugu' | 'vr';
export type PayableWith = IuguPayableWith | 'vr';
