import { Timestamp } from 'firebase/firestore';
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
  startAt: Timestamp;
  notifiedCouriers: { id: string; name: string }[];
  previouslyNotifiedCouriers: { id: string; name: string }[];
  rejections: OrderMatchingRejection[];
  /**
   * @deprecated
   */
  logs: string[];
}
