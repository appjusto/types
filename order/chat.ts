import firebase from 'firebase';
import { Flavor } from '../platform';

export interface ChatMessage {
  from: {
    agent: Flavor;
    id: string;
  };
  to: {
    agent: Flavor;
    id: string;
  };
  message: string;
  timestamp: firebase.firestore.Timestamp;
}
