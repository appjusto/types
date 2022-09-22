export interface Customer {
  /**
   * A unique identifier related to the consumer. If the Ordering Application does not have an Id for the customer, this Id can be generated when creating the order.
   */
  id: string;

  /**
   * Customer's phone. Here you can enter the customer's phone number directly (provided that the customer has given permission for this data to be shared, according to local policies) or another phone number (such as the ordering application's call center phone number) where the merchant can communicate about order issues that affect the customer (such as health issues).
   */
  phone: string;

  /**
   * Customer document. This document is mandatory for dealing with tax issues.
   */
  documentNumber: number;

  /**
   * Customer's name.
   */
  name: string;

  /**
   * Total number of orders that the customer already placed within the merchant.
   */
  ordersCountOnMerchant: number;
}
