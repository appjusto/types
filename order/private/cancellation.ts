import { Timestamp } from '../../external/firebase';
import { InvoiceType } from '../../invoice';
import { Flavor } from '../../platform';
import { Issue } from '../issues';

export interface OrderCancellationParams {
  refund: InvoiceType[];
}

export interface OrderCancellation {
  canceledBy: Flavor;
  canceledById?: string;
  params?: OrderCancellationParams;
  issue: Issue | null;
  comment: string | null;
  businessIndemnity?: boolean;
  timestamp: Timestamp;
}
