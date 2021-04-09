import firebase from 'firebase';

export type ReviewType = 'positive' | 'negative';

export interface Review {
  type: ReviewType;
  orderId?: string;
  comment?: string;
  createdOn?: firebase.firestore.FieldValue;
}
