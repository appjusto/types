export type PushMessageActionType = 'matching' | 'order-chat';

export interface PushMessageData {
  action: PushMessageActionType;
  orderId: string;
}

export interface PushMessage {
  id: string;
  data: PushMessageData;
  // transient
  clicked?: boolean;
  read?: boolean;
}

export interface OrderMatchPushMessageData extends PushMessageData {
  courierFee: number;
  distanceToOrigin: number;
  totalDistance: number;
  originAddress: string;
  destinationAddress: string;
}

export interface ChatPushMessageData extends PushMessageData {}
