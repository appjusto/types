import { Flavor, OrderStaff } from '..';
import { Timestamp } from '../external/firebase';

export type ComplaintStatus =
  | 'pending'
  | 'investigating'
  | 'upheld'
  | 'inconclusive';
export type ContactBy = 'whatsapp' | 'e-mail';
export interface Complaint {
  against: string;
  place: string;
  date: string;
  description: string;
  flavor: Flavor;
  contactBy: 'whatsapp' | 'e-mail';
  orderId?: string | null;
  staff?: OrderStaff | null;
  status: ComplaintStatus;
  createdBy: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
