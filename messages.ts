export type PushMessageActionType = 'matching' | 'order-chat';

export interface PushMessageData {
  action: PushMessageActionType;
}

export interface PushMessage {
  id: string;
  clicked?: boolean;
  data: PushMessageData;
}

export interface OrderMatchPushMessageData extends PushMessageData {
  orderId: string;
  courierFee: number;
  distanceToOrigin: number;
  totalDistance: number;
  originAddress: string;
  destinationAddress: string;
}

export interface ChatPushMessageData extends PushMessageData {
  orderId: string;
}
