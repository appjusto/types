import { Timestamp } from '../../external/firebase';
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
}
