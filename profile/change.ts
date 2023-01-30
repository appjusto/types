import { UserProfile } from '.';
import { UserType } from '..';
import { Timestamp } from '../external/firebase';

export interface ProfileChange {
  accountId: string;
  userType: UserType;
  situation: 'pending' | 'approved' | 'rejected';
  name?: string;
  surname?: string;
  cpf?: string;
  phone?: string;
  birthday?: string;
  createdOn: Timestamp;
}

export interface UserProfileChange {
  before: Partial<UserProfile>;
  after: Partial<UserProfile>;
  timestamp: Timestamp;
}
