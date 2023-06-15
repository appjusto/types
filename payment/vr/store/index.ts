import { Timestamp } from '../../../external/firebase';
import { VRPayableWith } from '../card';

export type VRStoreStatus = 'available' | 'unavailable';
export interface VRStore {
  businessId: string;
  affiliateId: number;
  paymentMethods: VRPayableWith[];
  status: VRStoreStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
}
