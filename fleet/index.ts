import { Timestamp } from '../external/firebase';
export type FleetSituation = 'pending' | 'approved' | 'rejected' | 'blocked';

export interface FleetFareParams {
  minimumFee: number; // (in cents) minimum fee charged by couriers
  distanceThreshold: number; // (in meters) distanced covered by the minimumFee
  additionalPerKmAfterThreshold: number; // (in cents) fee charged every km after distanceThreshold
  maxDistance: number; // (in meters) maximum trip distance
  maxDistanceToOrigin: number; // (in meters) maximum distance to the pickup place
  predefined?: [
    {
      minDistance: number;
      maxDistance: number;
      fee: number;
    }
  ];
}

export type FleetType = 'public' | 'private';

export interface FleetDetails extends FleetFareParams {
  type: FleetType;
  name: string;
  description: string;
  // metadata
  createdOn: Timestamp;
  createdBy?: {
    flavor: 'courier' | 'business';
    id: string;
  };
}

export interface Fleet extends FleetDetails {
  situation: FleetSituation;
  participantsOnline: number;
}
