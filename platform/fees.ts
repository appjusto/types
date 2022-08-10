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
  processing: {
    iugu: {
      [k in IuguPayableWith]: Fee;
    };
    vr: {
      vr: Fee;
    };
  };
  iuguFeeDescription?: string;
}
