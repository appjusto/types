import { Timestamp } from 'firebase/firestore';
import { Generic } from '../generics';

export interface TaskDocument {
  name: string | null;
  handler: string;
  startAt: Date | null;
  payload: Generic;
  extra: Generic | null;
  timestamp: Timestamp;
}

export interface UpdateDocumentTaskPayload {
  path: string;
  update: Generic;
  constraints?: Generic;
  extra?: Generic;
}
