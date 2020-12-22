export interface ChatMessage {
  from: string;
  to: string;
  message: string;
  destination: 'consumers' | 'couriers';
  timestamp: firebase.firestore.Timestamp;
}
