import firebase from 'firebase';
import { CourierMode, CourierStatistics } from '../courier';
import { LatLng } from '../platform';
export interface OrderCourier {
  id: string;
  name: string;
  notificationToken?: string | null;
  location: LatLng;
  distanceToOrigin: number;
  joined: firebase.firestore.FieldValue;
  mode: CourierMode;
  statistics?: CourierStatistics;
  updatedOn: firebase.firestore.FieldValue;
}
