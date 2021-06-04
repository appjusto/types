import { Issue } from '../issues';
import { OrderPaymentType } from '../payment';

export interface OrderCancellationParams {
  refund: OrderPaymentType[];
}

export interface OrderCancellation {
  canceledById: string;
  params: OrderCancellationParams;
  issue: Issue | null;
  comment: string | null;
  timestamp: firebase.firestore.FieldValue;
}
