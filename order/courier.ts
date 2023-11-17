import { CourierMode, CourierStatistics } from '../courier';
import { Timestamp } from '../external/firebase';
import { LatLng } from '../platform';

export interface OrderCourier {
  id?: string;
  name?: string;
  about?: string;
  phone?: string;
  notificationToken?: string | null;
  location?: LatLng;
  distanceToOrigin?: number | null;
  joined?: Timestamp;
  mode?: CourierMode;
  insured?: boolean;
  statistics?: CourierStatistics;
  updatedOn?: Timestamp;
}
