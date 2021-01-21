export interface PlaceOrderPayload {
  orderId: string;
  paymentMethodId: string;
  fleetId: string;
  platformFee: number;
  // transactionId: string;
}

export interface GetOrderQuotesPayload {
  orderId: string;
}
