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

export interface LalamoveAddPriorityFEePayload extends LalamoveBaseTaskPayload {
  action: 'add-priority-fee';
}

export type LalamoveTaskPayload =
  | LalamoveCreateQuotationTaskPayload
  | LalamoveCreateOrderTaskPayload
  | LalamoveFetchCourierInfoTaskPayload;
