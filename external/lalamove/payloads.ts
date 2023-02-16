export interface LalamoveTaskPayload {
  action: 'create-quotation' | 'craete-order' | 'fetch-courier-info';
  orderId: string;
}
