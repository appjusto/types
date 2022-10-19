import { Timestamp } from 'firebase/firestore';
import { UserProfile } from '.';
import { UserType } from '..';

export interface ProfileChange {
  accountId: string;
  userType: UserType;
  situation: 'pending' | 'approved' | 'rejected';
  name?: string;
  surname?: string;
  cpf?: string;
  phone?: string;
  createdOn: Timestamp;
}

export interface UserProfileChange {
  before: Partial<UserProfile>;
  after: Partial<UserProfile>;
  timestamp: Timestamp;
}
