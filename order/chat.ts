export interface ChatMessage {
  from: string;
  to: string;
  message: string;
  destination: 'consumers' | 'couriers' | 'restaurant';
  timestamp: firebase.firestore.Timestamp;
}
