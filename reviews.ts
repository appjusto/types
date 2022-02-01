import firebase from 'firebase';

export type ReviewType = 'positive' | 'negative';

export interface OrderConsumerReview {
  orderId: string;
  courier?: {
    courierId: string | null;
    rating: ReviewType;
    tags?: string[];
  };
  business?: {
    businessId: string | null;
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
