import firebase from 'firebase';
import { Flavor, WithId } from '../platform';

export type OrderRejectionType = 'refuse' | 'cancel';

export type IssueType =
  | 'courier-refuse'
  | 'courier-cancel'
  | 'courier-delivery-problem'
  | 'courier-drops-delivery'
  | 'courier-profile-invalid'
  | 'courier-rejects-matching'
  | 'consumer-cancel'
  | 'consumer-delivery-problem'
  | 'restaurant-cancel'
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
  createdBy: string;
  flavor: Flavor;
  comment?: string | null;
  createdOn?: firebase.firestore.FieldValue;
}

export interface OrderRejection extends OrderIssue {
  courierId: string;
}
