import firebase from 'firebase';
import { CourierOrderRequest } from './courier/requests';
import { ExpoPushMessage } from './external/expo';
import { ChatMessageUser } from './order/chat';

export type PushMessageActionType =
  | 'profile-update'
  | 'order-request'
  | 'order-chat'
  | 'order-update'
  | 'staff-order-update'
  | 'navigate-business'
  | 'none';

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
  from: ChatMessageUser;
}

export interface NavigateBusinessPushData {
  action: 'navigate-business';
  businessId: string;
}

export type PushMessageData =
  | OrderMatchPushMessageData
  | OrderUpdatePushData
  | ChatPushMessageData
  | NavigateBusinessPushData;

export interface PushMessage {
  id: string;
  data: PushMessageData;
  // transient
  clicked?: boolean;
  read?: boolean;
}

export interface PushReceipt {
  expoToken: string;
  createdOn: firebase.firestore.FieldValue;
  verified: boolean;
}

export interface NotificationTaskPayload {
  messages: ExpoPushMessage[];
}
