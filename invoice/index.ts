import firebase from 'firebase';
import { AccountType } from '../payment/tasks';

export interface Invoice {
  accountType: AccountType | 'platform';
  accountId?: string;
  accountExternalId?: string;
  orderId: string;
  externalId?: string;
  status?: string;
  createdOn: firebase.firestore.FieldValue;
  updatedOn?: firebase.firestore.FieldValue;
}
