import { OutsourceAccountType, Place } from '../..';
import { OrderPayload } from '../payloads';

export interface UpdateOrderFareCourierPayeePayload extends OrderPayload {
  action: 'update-fare-courier-payee';
  payee: OutsourceAccountType;
}

export type UpdateOrderPayload = UpdateOrderFareCourierPayeePayload;

export interface UpdateOrderPlacePayload extends OrderPayload {
  destination: Place;
  acknowledgedCosts: number;
}
