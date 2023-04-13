import { LalamoveOrderUpdatePayload } from './hooks';

export interface LalamoveBaseTaskPayload {
  orderId: string;
  startAt?: Date;
}

export interface LalamoveCreateQuotationTaskPayload
  extends LalamoveBaseTaskPayload {
  action: 'create-quotation';
  createOrder: boolean;
}

export interface LalamoveCreateOrderTaskPayload
  extends LalamoveBaseTaskPayload {
  action: 'create-order';
}
export interface LalamoveFetchCourierInfoTaskPayload
  extends LalamoveBaseTaskPayload {
  action: 'fetch-courier-info';
}

export interface LalamoveAddPriorityFeePayload extends LalamoveBaseTaskPayload {
  action: 'add-priority-fee';
}
export interface LalamoveHandleHookPayload extends LalamoveBaseTaskPayload {
  action: 'handle-hook';
  payload: LalamoveOrderUpdatePayload;
}

export interface LalamoveCancelOrderTaskPayload
  extends LalamoveBaseTaskPayload {
  action: 'cancel-order';
}

export type LalamoveTaskPayload =
  | LalamoveCreateQuotationTaskPayload
  | LalamoveCreateOrderTaskPayload
  | LalamoveFetchCourierInfoTaskPayload
  | LalamoveAddPriorityFeePayload
  | LalamoveHandleHookPayload
  | LalamoveCancelOrderTaskPayload;
