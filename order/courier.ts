import { CourierMode, CourierStatistics } from '../courier';
import { LatLng } from '../platform';

export interface OrderCourier {
  id: string;
  name: string;
  location: LatLng;
  joined: firebase.firestore.FieldValue;
  mode: CourierMode;
  statistics?: CourierStatistics;
}
