import { Timestamp } from '../external/firebase';
import { OrderType } from '../order';
import { LatLng } from '../platform';
import { Fee } from '../platform/fees';

export type CourierOrderRequestSituation =
  | 'pending'
  | 'accepted'
  | 'viewed'
  | 'rejected'
  | 'expired';

export interface CourierOrderRequest {
  type: OrderType;
  situation: CourierOrderRequestSituation;
  courierId: string;
  orderId: string;
  fee: number;
  processing: {
    fee: Fee;
    value: number;
  };
  origin: LatLng;
  distanceToOrigin: number;
  distance: number;
  originAddress: string;
  destination: LatLng;
  destinationAddress: string;
  readyAt: Date | null;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}
