import { Price } from '../price';

export type PaymentMethodType = 'PREPAID' | 'PENDING';
export type PaymentMethod =
  | 'CREDIT'
  | 'DEBIT'
  | 'MEAL_VOUCHER'
  | 'FOOD_VOUCHER'
  | 'DIGITAL_WALLET'
  | 'PIX'
  | 'CASH'
  | 'CREDIT_DEBIT'
  | 'COUPON'
  | 'REDEEM'
  | 'PREPAID_REDEEM'
  | 'OTHER';

export interface OrderPaymentMethod extends Price {
  /**
   * PREPAID if the payment was made through some platform, or PENDING if it going to be paid on delivery or in cash, for example.
   */
  type: PaymentMethodType;

  /**
   * method
   */
  method: PaymentMethod;

  /**
   * Additional information regarding the payment method.
   * It can be used to indicate some useful information of the chosen payment method, such as the name of the wallet, the card brand or an authorization number.
   * This field can be used for any method entered, but it is highly recommended to fill it in when the chosen method is OTHER.
   */
  methodInfo?: string;

  /**
   * Indicates the total that will be paid in cash by the customer and that should be considered for the calculation of the change
   * (ex. customer will pay a $43 order with a $50 bill. Then 50.00 must be entered.).
   * Only mandatory when method is CASH.
   */
  changeFor?: number;
}
