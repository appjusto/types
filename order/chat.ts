import { FieldValue } from 'firebase/firestore';
import { OrderStatus } from '..';
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
  participantsIds: string[];
  type: ChatMessageType;
  from: ChatMessageUser;
  to: ChatMessageUser;
  message: string;
  timestamp: FieldValue;
  orderStatus?: OrderStatus;
  read?: boolean;
}
