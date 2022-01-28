import firebase from 'firebase';

export type ReviewType = 'positive' | 'negative';

export interface OrderConsumerReview {
  orderId: string;
  courier?: {
    courierId: string;
    rating: ReviewType;
    tags?: string[];
  };
  business?: {
    businessId: string;
    rating: ReviewType;
    tags?: string[];
  };
  platform?: {
    rating: ReviewType;
    tags?: string[];
  };
  nps?: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  createdOn?: firebase.firestore.FieldValue;
}
