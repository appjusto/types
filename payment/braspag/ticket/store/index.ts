import { Timestamp } from '../../../../external/firebase';
import { TicketPayableWith } from '../card';

export type TicketStoreStatus = 'available' | 'unavailable';
export interface TicketStore {
  businessId: string;
  affiliateId: number;
  paymentMethods: TicketPayableWith[];
  status: TicketStoreStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
}
