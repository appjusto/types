import { FieldValue } from 'firebase/firestore';
import { CourierMode, CourierStatistics } from '../courier';
import { LatLng } from '../platform';

export interface OrderCourier {
  id: string;
  name: string;
  phone?: string;
  notificationToken?: string | null;
  location: LatLng;
  distanceToOrigin: number | null;
  joined: FieldValue;
  mode: CourierMode;
  statistics?: CourierStatistics;
  updatedOn: FieldValue;
}
