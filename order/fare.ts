import { Fleet } from '../fleet';
import { IuguInvoiceStatus } from '../payment/iugu';
import { WithId } from '../platform';
import { Fee } from '../platform/fees';

export interface Fare {
  fleet: WithId<Fleet> | null;
  courier: FareDetails | null;
  business: FareDetails | null;
  platform: FareDetails | null;
  total: number;
}

export interface FareDetails {
  value: number; // in cents
  /** @deprecated */
  processingFee?: number; // in cents
  processing?: {
    fee: Fee;
    value: number;
  };
  commission?: number; // in cents
  status?: IuguInvoiceStatus;
  paid?: number;
}
