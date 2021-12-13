import firebase from 'firebase';
import { OrderStatus } from '..';
import { Flavor } from '../platform';

export interface ChatMessageUser {
  agent: Flavor;
  id: string;
}

export interface ChatMessage {
  from: ChatMessageUser;
  to: ChatMessageUser;
  message: string;
  timestamp: firebase.firestore.FieldValue;
  orderStatus?: OrderStatus;
  read?: boolean;
}
