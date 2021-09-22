export interface User {
  lastSignInRequest: firebase.firestore.FieldValue;
  id: string | null;
  consumer?: {
    createdAt: firebase.firestore.FieldValue;
    deletedAt?: firebase.firestore.FieldValue | null;
  } | null;
  courier?: {
    createdAt: firebase.firestore.FieldValue;
    deletedAt?: firebase.firestore.FieldValue | null;
  } | null;
  manager?: {
    createdAt: firebase.firestore.FieldValue;
    deletedAt?: firebase.firestore.FieldValue | null;
  } | null;
}
