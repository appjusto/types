import { CourierOrderRequest } from './courier/requests';
import { ExpoPushMessage } from './external/expo';
import { ChatMessageUser } from './order/chat';

export type PushMessageActionType =
  | 'profile-update'
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

export interface OrderMatchPushMessageData
  extends PushMessageData,
    CourierOrderRequest {}

export interface ChatPushMessageData extends PushMessageData {}

export interface NotificationTaskPayload {
  messages: ExpoPushMessage[];
}
