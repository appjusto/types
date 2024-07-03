export interface TicketRequestResult {
  meta: {
    status: 'success';
    messages: [];
  };
}

export interface TicketRequestError {
  meta: {
    status: 'failed';
    messages: { code: TicketErrorCode; text: string; level: string }[];
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

// errors

export type TicketErrorCode =
  | 'CARD_NOT_FOUND'
  | 'INVALID_INFORMATION'
  | 'INVALID_CARD'
  | 'INVALID_MERCHANT'
  | 'INVALID_CARD_NUMBER'
  | 'LIMIT_EXCEEDED'
  | 'INVALID_MERCHANT'
  | 'TRANSACTION_DUPLICATED'
  | 'INSUFFICIENT_FUNDS'
  | 'TRANSACTION_LIMIT_EXCEEDED'
  | 'CARD_NOT_FOUND'
  | 'TRANSACTION_NOT_FOUND'
  | 'PARTIAL_REVERSALS_NOT_ALLOWED'
  | 'INVALID_CURRENCY_CODE'
  | 'INVALID_CAPTURE_MODE'
  | 'BAD_REQUEST'
  | 'INVALID_TOKEN'
  | 'ONLINE_TRANSACTIONS_DISABLED'
  | 'CARD_NOT_ACTIVATED'
  | 'BAD_REQUEST'
  | 'EMPTY_AUTHORIZATION_TOKEN'
  | 'INVALID_SEARCH_PERIOD'
  | 'BAD_REQUEST'
  | 'DECLINED'
  | 'INVALID_REQUEST'
  | 'CARD_NOT_ACTIVE'
  | 'INVALID_AMOUNT'
  | 'INVALID_MERCHANT'
  | 'INVALID_VOUCHER'
  | 'LIMIT_EXCEEDED'
  | 'LOCKOUT'
  | 'PARTIAL_REVERSALS_NOT_ALLOWED'
  | 'TEMPORARY_HOLD'
  | 'TRANSACTION_DUPLICATED'
  | 'TRANSACTION_NOT_AUTHORISED'
  | 'TRANSACTION_STATUS_MUST_BE_AUTHORIZED'
  | 'INVALID_AMOUNT'
  | 'TRANSACTION_NOT_AUTHORISED'
  | 'TRANSACTION_STATUS_MUST_BE_CAPTURED'
  | 'UNAUTHORIZED'
  | 'INVALID_TOKEN'
  | 'UNAUTHORIZED'
  | 'USER_INACTIVE'
  | 'INVALID_TOKEN_ISSUER'
  | string;
