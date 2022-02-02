import firebase from 'firebase';

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
    tags?: string[];
  };
  business?: {
    id: string | null;
    rating: ReviewType;
    tags?: string[];
  };
  platform?: {
    rating: ReviewType;
    tags?: string[];
  };
  nps?: number;
  comment?: string;
  createdOn?: firebase.firestore.FieldValue;
}

export type ReviewTagType =
  | 'courier-negative'
  | 'courier-positive'
  | 'business-negative'
  | 'business-positive'
  | 'platform-negative'
  | 'platform-positive';

export interface ReviewTag {
  type: ReviewTagType;
  id: string;
  title: string;
}
