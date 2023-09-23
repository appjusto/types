import { Timestamp } from '../external/firebase';
import { OrderType } from '../order';
import { Issue } from '../order/issues';
import { LatLng } from '../platform';
import { Fee } from '../platform/fees';

export type CourierOrderRequestSituation =
  | 'pending'
  | 'accepted'
  | 'viewed'
  | 'rejected'
  | 'dropped'
  | 'expired';

export interface CourierOrderRequest {
  type: OrderType;
  situation: CourierOrderRequestSituation;
  fleetId: string;
  fleetName: string;
  courierId: string;
  courierName: string;
  orderId: string;
  fee: number;
  processing: {
    fee: Fee;
    value: number;
  };
  viewed: boolean | null;
  rejectionIssue?: Issue | null;
  rejectionComment?: string | null;
  netValue: number;
  locationFee: number;
  origin: LatLng;
  routePolylineToOrigin?: string;
  distanceToOrigin: number;
  distanceToOriginWhenAccepted?: number;
  distance: number;
  originAddress: string;
  destination: LatLng;
  destinationAddress: string;
  readyAt: Date | null;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}
