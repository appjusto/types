import { IuguPayableWith } from '../payment/iugu';

export interface Fee {
  fixed: number; // in cents
  percent: number;
}

export interface PlatformFees {
  commissions: {
    food: Fee;
    p2p: Fee;
  };
  insurance: {
    business: Fee;
    courier: Fee;
    courierEnabled: boolean;
  };
  logistics: Fee;
  subscription: {
    ordersThreshold: number;
    value: number;
  };
  highDemand: boolean;
  processing: {
    iugu: {
      [k in IuguPayableWith]: Fee;
    } & { withdraw: number };
    vr: {
      vr: Fee;
    };
  };
  iuguFeeDescription?: string;
}
