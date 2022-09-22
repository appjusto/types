import { Version } from '../..';

export type EventsMethod = 'POLLING' | 'WEBHOOK';

/**
 * Requests the current version of the endpoints hosted on the ORDERING APPLICATION side.
 * /v1/versions/orderingApp
 */
export interface GetOrderingAppVersionsResponse {
  /**
   * Information regarding the Merchant's standard endpoints.
   */
  merchant?: {
    /**
     * "POST /v1/merchantUpdated"
     * "GET /v1/merchantStatus"
     */
    version: Version;
  };

  /**
   * Information regarding the Order's standard endpoints.
   */
  order?: {
    /**
     * Current version for ORDER endpoints.
     * "GET /v1/events:polling"
     * "GET /v1/orders/{orderId}"
     * "POST /v1/events/acknowledgment"
     * "POST /v1/orders/{orderId}/readyForPickup"
     * "POST /v1/orders/{orderId}/confirm"
     * "POST /v1/orders/{orderId}/requestCancellation"
     * "POST /v1/orders/{orderId}/dispatch"
     * "POST /v1/orders/{orderId}/denyCancellation"
     * "POST /v1/orders/{orderId}/acceptCancellation"
     */
    version?: Version;

    /**
     * Lists which methods for obtaining new order events the Software Service can use with this Ordering Application.
     */
    availableEventsMethods?: EventsMethod[];
  };
}

/**
 * Requests the version of the endpoints hosted on the SOFTWARE SERVICE side, related to the MERCHANTS.
 * /v1/versions/merchant
 */
export interface GetMerchantVersionsResponse {
  /**
   * Current version for the GET /v1/merchant endpoint.
   */
  merchantEndpoint?: Version;

  /**
   * Current version for the /v1/orderUpdate webhook.
   */
  ordersWebhook: string;
}
