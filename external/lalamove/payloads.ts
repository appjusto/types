export interface LalamoveTaskPayload {
  action: 'create-quotation' | 'create-order' | 'fetch-courier-info';
  orderId: string;
}
