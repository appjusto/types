import { Image } from '../../image';
import { Status } from '../../status';

/**
 * A Category is the propertie in which the merchant has to organize its ItemsOffers in order to make it easier for the user to find what he wants to buy. Categories have statuses and accepts Availability entities.
 */
export interface Category {
  /**
   * A unique identifier of the category.
   */
  id: string;

  /**
   * Category display index.
   */
  index: number;

  /**
   * Category name
   * <= 150 characters
   */
  name: string;

  /**
   * Category Description
   */
  description?: string;

  /**
   * Image of the category (the category image display depends on the client application interface)
   */
  image: Image;

  /**
   * Category External Code. (Tipically the merchant Software Service menu code)
   */
  externalCode: string;

  /**
   * Indicates if the entity is Avaliable or Unavaliable. Only use this type when you must disable the entity due to an unexpected event and you don't know when the service will be re-established (e.g. do not use for holidays).
   */
  status: Status;

  /**
   * The id values of Availability entities which provide details on when the category is available. Default assumes a Category is available at all times.
   */
  availabilityId: string;

  /**
   * A list of the id values of the child ItemOffer entities that correspond to this Category entity. Default assumes all ItemOffer entities are available in this category.
   */
  itemOfferId: string[];
}
