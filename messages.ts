import { OrderStatus } from '.';
import { CourierOrderRequest } from './courier/requests';
import { ExpoPushMessage } from './external/expo';
import { Timestamp } from './external/firebase';
import { ChatMessageUser } from './order/chat';

export type PushMessageActionType =
  | 'order-request'
  | 'order-chat'
  | 'order-update'
  | 'navigate-business';

export interface OrderMatchPushMessageData extends CourierOrderRequest {
  action: 'order-request';
  orderId: string;
}

export interface OrderUpdatePushData {
  action: 'order-update';
  orderId: string;
}

export interface ChatPushMessageData {
  action: 'order-chat';
  orderId: string;
  orderStatus: OrderStatus;
  from: ChatMessageUser;
}

export interface NavigateBusinessPushData {
  action: 'navigate-business';
  businessId: string;
}

export interface NavigatePushData {
  action: 'navigate';
  url: string;
}

export type PushMessageData =
  | OrderMatchPushMessageData
  | OrderUpdatePushData
  | ChatPushMessageData
  | NavigateBusinessPushData
  | NavigatePushData;

export interface PushMessage {
  id: string;
  data: PushMessageData;
  // transient
  clicked?: boolean;
  read?: boolean;
}

export interface PushReceipt {
  expoToken: string;
  createdOn: Timestamp;
  verified: boolean;
}

export interface NotificationTaskPayload {
  messages: ExpoPushMessage[];
}
