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
  grossValue: number;
  netValue: number;
  /** @deprecated */
  value: number; // in cents
  paid?: number; // in cents
  processing?: {
    fee: Fee;
    value: number; // in cents
  };
  commission?: number; // in cents
  insurance?: number; // in cents
  status?: IuguInvoiceStatus;
}
