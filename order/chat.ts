import firebase from 'firebase';
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
  orderId?: string;
  participantsIds?: string[];
  type?: ChatMessageType;
  from: ChatMessageUser;
  to: ChatMessageUser;
  message: string;
  timestamp: firebase.firestore.FieldValue;
  orderStatus?: OrderStatus;
  read?: boolean;
}
