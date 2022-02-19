import firebase from 'firebase';
import { Flavor } from '..';

export type ReviewType = 'positive' | 'negative';

export interface Review {
  type: ReviewType;
  orderId?: string;
  comment?: string;
  createdOn?: firebase.firestore.FieldValue;
}

export interface OrderConsumerReview {
  orderId: string;
  consumer: {
    id: string;
  };
  courier?: {
    id: string | null;
    rating: ReviewType;
    tags?: ReviewTag[] | null;
  };
  business?: {
    id: string | null;
    rating: ReviewType;
    tags?: ReviewTag[] | null;
  };
  platform?: {
    rating: ReviewType;
    tags?: ReviewTag[] | null;
  };
  nps?: number;
  comment?: string;
  reviewedOn?: firebase.firestore.FieldValue;
}

export interface ReviewTag {
  agent: Flavor;
  type: ReviewType;
  id: string;
  title: string;
}
