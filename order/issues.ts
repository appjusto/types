import firebase from 'firebase';
import { WithId } from '../platform';

export type OrderRejectionType = 'refuse' | 'cancel';

export type IssueType =
  | 'courier-refuse'
  | 'courier-cancel'
  | 'courier-delivery-problem'
  | 'consumer-cancel'
  | 'consumer-delivery-problem'
  | 'restaurant-cancel'
  | 'courier-profile-invalid'
  | 'business-profile-invalid'
  | 'agent-order-cancel';

export interface Issue {
  id?: string;
  order?: number;
  type: IssueType;
  title: string;
}

export interface OrderIssue {
  issue: WithId<Issue>;
  comment?: string;
  createdOn?: firebase.firestore.FieldValue;
}

export interface OrderRejection extends OrderIssue {
  courierId: string;
}
