import { Timestamp } from '../firebase';
import { IOrder } from './order';
import { IQuotation } from './quotation';

export interface LalamoveQuotation {
  orderId: string;
  netValue: number;
  marketValue: number;
  locationFee: number;
  quotation: IQuotation;
  createdAt: Timestamp;
}

export interface LalamoveOrder {
  orderId: string;
  order: IOrder;
  createdAt: Timestamp;
}
