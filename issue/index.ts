import { Timestamp } from '../external/firebase';
import { Issue } from '../order/issues';
import { ClientFlavor } from '../platform';

export interface Incident {
  issue: Issue;
  createdBy: {
    id: string;
    flavor: ClientFlavor;
  };
  orderId?: string;
  comment?: string | null;
  createdAt?: Timestamp;
}
