import { Timestamp } from '../firebase';
import { IQuotation } from './quotation';

export interface LalamoveQuotation {
  orderId: string;
  netValue: number;
  marketValue: number;
  locationFee: number;
  quotation: IQuotation;
  createdAt: Timestamp;
}
