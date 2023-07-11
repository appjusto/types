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
  contactBy: 'whatsapp' | 'e-mail';
  orderId?: string | null;
  code?: string | null;
  staff?: OrderStaff | null;
  status: ComplaintStatus;
  conclusion?: string;
  createdBy: {
    id: string;
    flavor: Flavor;
    name?: string;
  };
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
