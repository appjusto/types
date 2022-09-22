import { Price } from '../../../price';
import { Status } from '../../status';

/**
 * The OptionGroup is the entity used to group customizations of a product, for example: "Choose your beverage:" An OptionGroup can be shared by several items. The OptionGroup has its own statuses, and can be activated or desactivated when needed.
 */
export interface OptionGroup {
  /**
   * A unique identifier of the option group.
   */
  id: string;

  /**
   * Option Group display index.
   */
  index: number;

  /**
   * Option Group Name.
   * <= 150 characters
   */
  name: string;

  /**
   * Option Group Description
   */
  description?: string;

  /**
   * Option Group External Code. (Tipically the merchant Software Service group code)
   */
  externalCode: string;

  /**
   * Indicates if the entity is Avaliable or Unavaliable. Only use this type when you must disable the entity due to an unexpected event and you don't know when the service will be re-established (e.g. do not use for holidays).
   */
  status: Status;

  /**
   * The minimum number of options which should be selected in the option group.
   */
  minPermitted: number;

  /**
   * The maximum number of options which should be selected in the option group.
   */
  maxPermitted: number;

  /**
   * A list of Option entities that correspond to this option group
   */
  options?: Option[];
}

/**
 * Options are the complements of a OptionGroup. It can be defined as: "A Item related to a OptionGroup". It is possible to set the Option price to 0.00 regardless of whether it is mandatory or optional.
 */
export interface Option {
  /**
   * A unique identifier of the option.
   */
  id: string;

  /**
   * The id value of the Item entity correlated to this Option entity.
   */
  itemId?: string;

  /**
   * Option Group display index.
   */
  index?: number;

  /**
   * Indicates if the entity is Avaliable or Unavaliable. Only use this type when you must disable the entity due to an unexpected event and you don't know when the service will be re-established (e.g. do not use for holidays). Default is AVAILABLE.
   */
  status?: Status;

  /**
   * Price of the option. Original and actual values can be informed, for showing discounts.
   */
  price?: Price;

  /**
   * The maximum number of options which should be selected in the option group.
   */
  maxPermitted: number;
}
