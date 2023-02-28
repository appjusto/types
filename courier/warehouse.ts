import { CourierMode, CourierStatus } from '.';
import {
  CourierOrderRequestSituation,
  Issue,
  OrderType,
  ProfileSituation,
  ProfileTimestamps,
} from '..';
import { GeoPoint, Timestamp } from '../external/firebase';

export type CourierWarehouse = {
  name: string | null;
  email: string | null;
  phone: string | null;
  birthday: string | null;
  situation: ProfileSituation;
  status: CourierStatus;
  notificationToken: string | null;
  coordinates: GeoPoint | null;
  city: string | null;
  state: string | null;
  mode: CourierMode;
  fleetsIds: string;
  appVersion: string | null;
  appInstallationId: string | null;
  timestamps: ProfileTimestamps;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
};

export interface CourierRequestWarehouse {
  type: OrderType;
  situation: CourierOrderRequestSituation;
  fleetId: string;
  fleetName: string;
  courierId: string;
  courierName: string;
  orderId: string;
  netValue: number;
  locationFee: number;
  viewed?: boolean;
  rejectionIssue?: Issue | null;
  rejectionComment?: string | null;
  origin: GeoPoint;
  distanceToOrigin: number;
  distanceToOriginWhenAccepted?: number;
  distance: number;
  originAddress: string;
  destination: GeoPoint;
  destinationAddress: string;
  readyAt: Date | null;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
}
