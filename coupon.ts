import { Timestamp } from './external/firebase';
import { Flavor } from './platform';

export type CouponType =
  | 'delivery-free'
  | 'delivery-discount'
  | 'food-discount'
  | 'platform-discount'; // backoffice

export type CouponUsagePolicy = 'once' | 'new-customers' | 'renewable' | 'none';

export interface Coupon {
  createdBy: {
    flavor: Flavor;
    id?: string | null;
  };
  code: string;
  type: CouponType;
  discount?: number;
  minOrderValue?: number;
  usagePolicy: CouponUsagePolicy;
  enabled: boolean;
  enabledAt?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
