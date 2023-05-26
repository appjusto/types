export interface IuguCreatePaymentTokenData {
  number: string;
  verification_value: string;
  first_name: string;
  last_name: string;
  month: string;
  year: string;
}

export interface IuguCreatePaymentToken {
  account_id: string;
  method: 'credit_card';
  test?: boolean;
  data: IuguCreatePaymentTokenData;
}

export interface IuguPaymentToken {
  id: string;
  method: 'credit_card';
  extra_info: {
    bin?: string;
    brand: string; // VISA, MASTERCARD, ...
    display_number: string; // XXXX-XXXX-XXXX-1111
    holder_name: string;
    month: number;
    year: number;
  };
}

export interface IuguCreateCustomerPaymentMethod {
  description: string;
  token: string;
  set_as_default?: boolean;
}

export interface IuguCustomerPaymentMethod {
  id: string;
  description: string;
  item_type: 'credit_card';
  data: {
    brand: string; // VISA, MASTERCARD, ...
    display_number: string; // XXXX-XXXX-XXXX-1111
    last_digits: string;
    holder_name: string;
    month: number;
    year: number;
  };
}
