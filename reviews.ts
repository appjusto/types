import firebase from 'firebase';
import { Flavor } from '.';

export type ReviewType = 'positive' | 'negative';

export interface Review {
  type: ReviewType;
  orderId?: string;
  comment?: string;
  createdOn?: firebase.firestore.FieldValue;
}

export interface OrderConsumerReview {
  orderId: string;
  courier?: {
    id: string | null;
    rating: ReviewType;
    tags?: ReviewTag[];
  };
  business?: {
    id: string | null;
    rating: ReviewType;
    tags?: ReviewTag[];
  };
  platform?: {
    rating: ReviewType;
    tags?: ReviewTag[];
  };
  nps?: number;
  comment?: string;
  createdOn?: firebase.firestore.FieldValue;
}

export interface ReviewTag {
  agent: Flavor;
  type: ReviewType;
  id: string;
  title: string;
}
