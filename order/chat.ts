import { OrderStatus } from '..';
import { Timestamp } from '../external/firebase';
import { Flavor } from '../platform';

export type ChatMessageType =
  | 'business-consumer'
  | 'business-courier'
  | 'consumer-courier';

export interface ChatMessageUser {
  agent: Flavor;
  id: string;
  name?: string;
}

export interface ChatMessage {
  orderId: string;
  orderCode?: string;
  participantsIds: string[];
  type: ChatMessageType;
  from: ChatMessageUser;
  to: ChatMessageUser;
  message: string;
  timestamp: Timestamp;
  orderStatus?: OrderStatus;
  read?: boolean;
}
