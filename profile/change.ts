import firebase from 'firebase';

export interface ProfileChange {
  accountId: string;
  situation: 'pending' | 'approved' | 'rejected';
  name?: string;
  surname?: string;
  cpf?: string;
  phone?: string;
  createdOn: firebase.firestore.FieldValue;
}
