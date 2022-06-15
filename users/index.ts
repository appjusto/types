import { FieldValue } from 'firebase/firestore';
import { Flavor } from '..';

export type UserType = 'consumer' | 'manager' | 'courier';

export interface User {
  lastSignInRequest: FieldValue;
  lastSignInFlavor?: Flavor;
  id: string | null;
  consumer?: {
    createdAt: FieldValue;
    deletedAt?: FieldValue | null;
  } | null;
  courier?: {
    createdAt: FieldValue;
    deletedAt?: FieldValue | null;
  } | null;
  manager?: {
    createdAt: FieldValue;
    deletedAt?: FieldValue | null;
  } | null;
  cpf?: string;
  phone?: string;
  appInstallationId?: string;
  blocked?: boolean;
  comment?: string;
}
