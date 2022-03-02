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
  startAt: FieldValue;
  /**
   * @deprecated
   */
  couriersNotified: string[];
  /**
   * @deprecated
   */
  couriersPreviouslyNotified?: string[];
  notifiedCouriers: { id: string; name: string }[];
  previouslyNotifiedCouriers: { id: string; name: string }[];
  rejections: OrderMatchingRejection[];
  logs: string[];
}
