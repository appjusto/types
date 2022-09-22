/**
 * A Item property is the menu entity that carries all the general item information, like: name, description, external code, image, nutricional information, and EAN (European Article Number). The Item can be offered in a Menu as a main item or an option. And, for the same store, it can even be reused in different Menus.
 */

import { Price } from '../../../price';
import { Image } from '../../image';
import { Status } from '../../status';
import { NutritionalInfo } from './nutritional-info';

export interface Item {
  /**
   * A unique identifier of the item.
   */
  id: string;

  /**
   * Item name
   * <= 150 characters
   */
  name: string;

  /**
   * Item Description
   */
  description: string;

  /**
   * Item External Code. (Tipically the merchant Software Service item code)
   */
  externalCode: string;

  /**
   * Indicates if the entity is Avaliable or Unavaliable. Only use this type when you must disable the entity due to an unexpected event and you don't know when the service will be re-established (e.g. do not use for holidays). Default is AVAILABLE.
   */
  status?: Status;

  /**
   * Image of the item
   */
  image?: Image;

  /**
   * Nutrition information for the dish.
   */
  nutritionalInfo?: NutritionalInfo;

  /**
   * Field to show the number of people the portion serves.
   */
  serving?: number;

  /**
   * Measure Unit of the Item.
   */
  unit: string;

  /**
   * EAN (European Article Number)
   */
  ean?: string;
}

/**
 * The ItemOffer can be considered the offering of a item, and it is used to set the item price and Availability. The ItemOffer is a Item related to the Category.
 */

export interface ItemOffer {
  /**
   * A unique identifier of the item offer.
   */
  id: string;

  /**
   * The id value of the Item entity correlated to this ItemOffer entity.
   */
  itemId: string;

  /**
   * ItemOffer display index.
   */
  index: number;

  /**
   * Indicates if the entity is Avaliable or Unavaliable. Only use this type when you must disable the entity due to an unexpected event and you don't know when the service will be re-established (e.g. do not use for holidays). Default is AVAILABLE.
   */
  status?: Status;

  /**
   * Price of the menu item offer. Original and actual values can be informed, for showing discounts.
   */
  price: Price;

  /**
   * The id values of Availability entities which provide details on when the menu item offer is available. Default assumes an ItemOffer is available at all times.
   */
  availabilityId: string[];

  /**
   * A list of the id values of the child OptionGroup entities that correspond to this ItemOffer entity.
   */
  optionGroupsId?: string[];
}
