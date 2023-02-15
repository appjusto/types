import { CourierMode, CourierStatistics } from '../courier';
import { Timestamp } from '../external/firebase';
import { LatLng } from '../platform';

export interface OrderCourier {
  id?: string;
  name?: string;
  phone?: string;
  notificationToken?: string | null;
  location?: LatLng;
  distanceToOrigin: number | null;
  joined?: Timestamp;
  mode: CourierMode;
  statistics?: CourierStatistics;
  updatedOn?: Timestamp;
}
