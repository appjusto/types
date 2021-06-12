import firebase from 'firebase';
import { WithId } from '../../platform';
import { Issue } from '../issues';

export interface OrderMatchingRejection {
  courierId: string;
  timestamp: Date;
  issue: WithId<Issue>;
  comment?: string | null;
}

export interface OrderMatching {
  task: string;
  attempt: number;
  trials: number;
  startAt: firebase.firestore.FieldValue;
  couriersNotified: string[];
  rejections: OrderMatchingRejection[];
  logs: string[];
}
