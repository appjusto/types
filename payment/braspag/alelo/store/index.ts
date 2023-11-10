import { Timestamp } from '../../../../external/firebase';
import { AleloPayableWith } from '../card';

export type AleloStoreStatus = 'available' | 'unavailable';
export interface AleloStore {
  businessId: string;
  affiliateId: number;
  paymentMethods: AleloPayableWith[];
  status: AleloStoreStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
}
