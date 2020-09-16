export type PushMessageActionType = 'matching';

export interface PushMessageData {
  action: PushMessageActionType;
}

export interface OrderMatchPushMessageData extends PushMessageData {
  orderId: string;
  courierFee: number;
  distanceToOrigin: number;
  totalDistance: number;
  originAddress: string;
  destinationAddress: string;
}
