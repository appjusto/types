export type FleetSituation = 'pending' | 'approved' | 'rejected' | 'blocked';

export interface FleetFareParams {
  minimumFee: number; // (in cents) minimum fee charged by couriers
  distanceThreshold: number; // (in meters) distanced covered by the minimumFee
  additionalPerKmAfterThreshold: number; // (in cents) fee charged every km after distanceThreshold
  maxDistance: number; // (in meters) maximum trip distance
  maxDistanceToOrigin: number; // (in meters) maximum distance to the pickup place
  valueThreshold: number; // (in cents) limit without charges over the order value
  feePctOverValue: number; // (percent as decimal; ex: for 2%, set 0.02) fee charged for orders greater than valueThreshold
}

export interface Fleet extends FleetFareParams {
  // user defined
  name: string;
  description: string;
  createdBy: string; // id of user who created the fleet
  // managed by the platform
  createdOn: firebase.firestore.FieldValue;
  situation: FleetSituation;
  platformFee?: string;
  participantsOnline?: number;
}
