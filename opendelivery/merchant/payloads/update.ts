import { Menu } from '../menu';
import { Availability } from '../menu/availability';
import { Category } from '../menu/category';
import { Item, ItemOffer } from '../menu/item';
import { Option, OptionGroup } from '../menu/option';
import { Service } from '../service';
import { Status } from '../status';

/**
 * Webhook is sent to notify the Ordering Application that an new update has happened on the merchant information.
 * The Ordering Application that implements this webhook, should return an HTTP 200 response code with an empty response body to acknowledge receipt of the webhook event. If the merchant Software Service does not receive a 200 acknowledgement response, than the webhook event will be resent based on the Software Service policies.
 * POST /v1/merchantUpdate
 * This endpoint can be used in the following ways:
/**
 *  1 - Sent with an empty body:
 * This will force Ordering Application to make a new request to the GET /v1/merchant endpoint to update all the merchant information.
 */
export interface MerchantUpdateEmptyRequest {}

/**
 * 2 - Sent with only the merchantStatus field:
 * This will force the opening or closing of the merchant within the Ordering Application, without forcing a new GET /v1/merchant call.
 */
export interface MerchantUpdateStatusRequest {
  /**
   * Indicates if the Merchant is Avaliable or Unavaliable. Only use this type when you must close (disable) the merchant due to an unexpected event and you don't know when the service will be re-established (e.g. do not use for holidays).
   */
  merchantStatus: Status;
}

/**
 * 3 - Sent only with the entityType and updatedObjects fields:
 * This will force the Ordering Application to update only the sent objects, without forcing a new GET /v1/merchant call.
 * When the entityType field is populated, the updatedObjects field cannot be empty.
 * 4 - Sent the merchantStatus, entityType and updatedObjects fields:
 * This will force scenarios 2 and 3 to happen simultaneously.
 */

export interface MerchantUpdateEntityBaseRequest {
  /**
   * Indicates if the Merchant is Avaliable or Unavaliable. Only use this type when you must close (disable) the merchant due to an unexpected event and you don't know when the service will be re-established (e.g. do not use for holidays).
   */
  merchantStatus?: Status;
}

export interface MerchantUpdateServiceRequest
  extends MerchantUpdateEntityBaseRequest {
  /**
   * The entity type of the updated object.
   */
  entityType: 'SERVICE';

  /**
   * Updated Service entity objects
   */
  updatedObjects: Service[];
}

export interface MerchantUpdateMenuRequest
  extends MerchantUpdateEntityBaseRequest {
  /**
   * The entity type of the updated object.
   */
  entityType: 'MENU';

  /**
   * Updated Menu entity objects
   */
  updatedObjects: Menu[];
}

export interface MerchantUpdateCategoryRequest
  extends MerchantUpdateEntityBaseRequest {
  /**
   * The entity type of the updated object.
   */
  entityType: 'CATEGORY';

  /**
   * Updated Category entity objects
   */
  updatedObjects: Category[];
}

export interface MerchantUpdateItemRequest
  extends MerchantUpdateEntityBaseRequest {
  /**
   * The entity type of the updated object.
   */
  entityType: 'ITEM';

  /**
   * Updated Item entity objects
   */
  updatedObjects: Item[];
}

export interface MerchantUpdateItemOfferRequest
  extends MerchantUpdateEntityBaseRequest {
  /**
   * The entity type of the updated object.
   */
  entityType: 'ITEM_OFFER';

  /**
   * Updated ItemOffer entity objects
   */
  updatedObjects: ItemOffer[];
}

export interface MerchantUpdateOptionGroupRequest
  extends MerchantUpdateEntityBaseRequest {
  /**
   * The entity type of the updated object.
   */
  entityType: 'OPTION_GROUP';

  /**
   * Updated OptionGroup entity objects
   */
  updatedObjects: OptionGroup[];
}

export interface MerchantUpdateOptionRequest
  extends MerchantUpdateEntityBaseRequest {
  /**
   * The entity type of the updated object.
   */
  entityType: 'OPTION';

  /**
   * Updated Option entity objects
   */
  updatedObjects: Option[];
}

export interface MerchantUpdateAvailabilityRequest
  extends MerchantUpdateEntityBaseRequest {
  /**
   * The entity type of the updated object.
   */
  entityType: 'AVAILABILITY';

  /**
   * Updated Option entity objects
   */
  updatedObjects: Availability[];
}

export type MerchantUpdateRequest =
  | MerchantUpdateEmptyRequest
  | MerchantUpdateStatusRequest
  | MerchantUpdateServiceRequest
  | MerchantUpdateMenuRequest
  | MerchantUpdateCategoryRequest
  | MerchantUpdateItemRequest
  | MerchantUpdateItemOfferRequest
  | MerchantUpdateOptionGroupRequest
  | MerchantUpdateOptionRequest
  | MerchantUpdateAvailabilityRequest;
