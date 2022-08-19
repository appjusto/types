import { FieldValue } from 'firebase/firestore';
import { OrderType } from '../order';
import { LatLng } from '../platform';
import { Fee } from '../platform/fees';

export interface CourierOrderRequest {
  type: OrderType;
  situation: 'pending' | 'accepted' | 'viewed' | 'rejected' | 'expired';
  orderId: string;
  fee: number;
  processing: {
    fee: Fee;
    value: number;
  };
  /** @deprecated */
  processingFee: number;
  origin: LatLng;
  distanceToOrigin: number;
  distance: number;
  originAddress: string;
  destination: LatLng;
  destinationAddress: string;
  readyAt: Date | null;
  createdOn: FieldValue;
  updatedOn?: FieldValue;
}
