import { Flavor } from '..';
import { Timestamp } from '../external/firebase';

export type UserType = 'consumer' | 'manager' | 'courier';

export interface User {
  lastSignInRequest: Timestamp;
  lastSignInFlavor?: Flavor;
  id: string | null;
  consumer?: {
    createdAt: Timestamp;
    deletedAt?: Timestamp | null;
  } | null;
  courier?: {
    createdAt: Timestamp;
    deletedAt?: Timestamp | null;
  } | null;
  manager?: {
    createdAt: Timestamp;
    deletedAt?: Timestamp | null;
  } | null;
  cpf?: string;
  phone?: string;
  appInstallationId?: string;
  accessCode?: string;
  blocked?: boolean;
  comment?: string;
}
