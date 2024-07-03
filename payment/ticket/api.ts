export interface TicketRequestResult {
  meta: {
    status: 'success';
    messages: [];
  };
}

export interface TicketRequestError {
  meta: {
    status: 'failed';
    messages: { code: string; text: string; level: string }[];
  };
}

export type TicketPaymentStatus =
  | 'authorized'
  | 'captured'
  | 'cancelled'
  | 'refunded';

export interface CreateTicketPaymentResult extends TicketRequestResult {
  data: {
    order_ref: string;
    mid: string;
    authorization_id: string;
    authorized_amount: number;
    capture_id: string;
    capture_amount: number;
    status: TicketPaymentStatus;
  };
}
