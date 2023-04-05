import { Timestamp } from '../../external/firebase';
import { Flavor } from '../../platform';
import { Issue } from '../issues';

export type OrderRefundType = 'service' | 'products' | 'delivery' | 'tip';
export interface OrderCancellationParams {
  refund: OrderRefundType[];
}
export interface OrderCancellation {
  canceledBy: Flavor;
  canceledById?: string | null;
  params?: OrderCancellationParams;
  issue: Issue | null;
  comment: string | null;
  businessIndemnity?: boolean;
  timestamp: Timestamp;
}
