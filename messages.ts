export type PushMessageActionType = 'matching' | 'order-chat';

export interface PushMessageData {
  action: PushMessageActionType;
}
