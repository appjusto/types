import { TicketProduct } from '.';
import { Timestamp } from '../../external/firebase';
import { TicketPayableWith } from './payable';

export type TicketStoreStatus = 'pending' | 'available' | 'unavailable';
export interface TicketStore {
  businessId: string;
  document: string; // cnpj
  phone: string;
  products:
    | {
        name: TicketProduct;
        enablementID: string;
        status: 'Enabled' | 'Pending' | 'Disabled';
      }[]
    | null;
  paymentMethods: TicketPayableWith[] | null;
  status: TicketStoreStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
}
