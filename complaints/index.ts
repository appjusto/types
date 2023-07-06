import { Flavor, OrderStaff } from '..';
import { Timestamp } from '../external/firebase';

export interface Complaint {
  against: string;
  place: string;
  date: string;
  description: string;
  flavor: Flavor;
  orderId?: string | null;
  staff?: OrderStaff | null;
  status: 'pending' | 'investigating' | 'upheld' | 'inconclusive';
  createdBy: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
