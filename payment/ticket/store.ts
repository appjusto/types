import { Timestamp } from '../../external/firebase';
import { TicketPayableWith } from './payable';

export type TicketStoreStatus = 'available' | 'unavailable';
export interface TicketStore {
  businessId: string;
  mid: string;
  document: string;
  paymentMethods: TicketPayableWith[];
  status: TicketStoreStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
}
