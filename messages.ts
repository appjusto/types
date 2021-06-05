import { ExpoPushMessage } from './external/expo';
import { ChatMessageUser } from './order/chat';

export type PushMessageActionType =
  | 'order-request'
  | 'order-chat'
  | 'order-update';

export interface PushMessageData {
  action: PushMessageActionType;
  orderId: string;
  from: ChatMessageUser;
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
  readyAt?: Date;
}

export interface ChatPushMessageData extends PushMessageData {}

export interface NotificationTaskPayload {
  messages: ExpoPushMessage[];
}
