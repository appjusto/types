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
  /** @deprecated */
  p2p: ServiceFee;
  /** @deprecated */
  food: ServiceFee;
}

/** @deprecated */
export interface ServiceFee {
  platform: {
    fixed: number; // in cents
    percent: number;
  };
  taxes: number;
  processing: {
    fixed: number; // in cents
    percent: number;
  };
}
