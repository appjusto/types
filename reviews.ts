export type ReviewType = 'positive' | 'negative';

export interface Review {
  type: ReviewType;
  comment?: string;
  createdOn: firebase.firestore.FieldValue;
}
