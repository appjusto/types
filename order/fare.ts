import { Fleet } from '../fleet';
import { IuguInvoiceStatus } from '../payment/iugu';
import { LedgerEntryOperation } from '../payment/ledger';
import { OutsourceAccountType, WithId } from '../platform';
import { Fee } from '../platform/fees';

export interface Fare {
  fleet: (WithId<Fleet> & { courierId?: string }) | null;
  courier: FareDetails | null;
  business: FareDetails | null;
  platform: FareDetails | null;
  findersFee?: number;
  credits?: number;
  discount?: number;
  total: number;
}

export interface FareDetails {
  value: number; // in cents
  netValue?: number;
  paid?: number; // in cents
  processing?: {
    fee: Fee;
    value: number; // in cents
  };
  extras?: [
    {
      id: string;
      value: number;
      operation: LedgerEntryOperation;
    }
  ];
  commission?: number; // in cents
  insurance?: number; // in cents
  locationFee?: number; // in cents
  credits?: number;
  discount?: number;
  payee?: OutsourceAccountType;
  status?: IuguInvoiceStatus;
}
