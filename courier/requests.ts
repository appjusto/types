import firebase from 'firebase';
import { OrderType } from '../order';
import { LatLng } from '../platform';

export interface CourierOrderRequest {
  type: OrderType;
  situation: 'pending' | 'accepted' | 'viewed' | 'rejected' | 'expired';
  orderId: string;
  fee: number;
  origin: LatLng;
  distanceToOrigin: number;
  distance: number;
  originAddress: string;
  destinationAddress: string;
  readyAt: Date | null;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
  destination?: LatLng;
}
