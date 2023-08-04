import { UserProfile } from '.';
import { CourierCompany, UserType } from '..';
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
  images?: boolean;
  company?: Partial<CourierCompany>;
  createdOn: Timestamp;
}

export interface UserProfileChange {
  before: Partial<UserProfile>;
  after: Partial<UserProfile>;
  timestamp: Timestamp;
}
