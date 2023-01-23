import { GeoPoint, Timestamp } from '../external/firebase';
import { Fee } from '../platform/fees';

export type OrderFeeType = 'high-demand';

export type OrderFeePaidBy = 'consumer' | 'business';

export interface OrderFee {
  type: OrderFeeType;
  fee: Fee;
  enabled: boolean;
  paidBy: OrderFeePaidBy;
  coordinates?: GeoPoint;
  g?: {
    geopoint: GeoPoint;
    geohash: string;
  };
  radius?: number;
  // meta
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
