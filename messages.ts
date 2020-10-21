export type PushMessageActionType = 'matching' | 'order-chat';

export interface PushMessageData {
  action: PushMessageActionType;
}

export interface PushMessage {
  id: string;
  clicked?: boolean;
  data: PushMessageData;
}
