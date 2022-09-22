/**
 * Get specific merchant info reading status provided by the Ordering Application.
 * PUT /v1/merchantOnboarding?merchantId=
 * Query parameters
 * merchantId
 * The Id of the Merchant for whom you want to complete or change registration info.
 */

export interface PutMerchantOnboardingRequest {
  /**
   * Information about the merchant's Software Service's GET /v1/merchant access. This endpoint has the necessary information for the Ordering Application to be able to make the merchant's available on their plataform.
   */
  getMerchantURL?: {
    /**
     * The URL for accessing the endpoint.
     */
    baseURL?: string;

    /**
     * The API_KEY for accessing the endpoint (see AUTHENTICATION section form more information).
     */
    apiKey?: string;
  };
  ordersWebhookURL?: string;
}

export type PutMerchantOnboardingResponse = PutMerchantOnboardingRequest;
