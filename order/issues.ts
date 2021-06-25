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
  | 'agent-order-cancel'
  | 'courier-drops-food-delivery'
  | 'courier-drops-p2p-delivery'
  | 'courier-pickup-food-delivery'
  | 'courier-pickup-p2p-delivery'
  | 'courier-delivering-food-order'
  | 'courier-delivering-p2p-order'
  | 'courier-destination-food'
  | 'courier-destination-p2p'
  | 'courier-rates-restaurant'
  | 'courier-rates-consumer-food'
  | 'courier-rates-app'
  | 'courier-rates-consumer-p2p';

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
