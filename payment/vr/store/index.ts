import { VRPayableWith } from '../card';

export interface VRStore {
  businessId: string;
  affiliateId: number;
  paymentMethods: VRPayableWith[];
  status: 'available' | 'unavailable';
}
