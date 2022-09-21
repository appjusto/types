/**
 * A Menu is a set of linked properties such as categories, items, offers and availability.
In order to be displayed by the Ordering Application, a Menu needs to be linked to a Service through the menuId property.
 */
export interface Menu {
  /**
   * A unique identifier of the menu.
   */
  id: string;

  /**
   * Menu name
   * <= 500 characters
   */
  name: string;

  /**
   * Menu Description
   */
  description?: string;

  /**
   * Menu External Code. (Tipically the merchant Software Service menu code)
   */
  externalCode: string;

  /**
   * Disclaimer
   */
  disclaimer?: string;

  /**
   * Disclaimer URL
   */
  disclaimerURL?: string;

  /**
   * A list of the id values of the child Category entities that correspond to this Menu entity. Default assumes all Category entities are available in this menu.
   */
  categoryId: string[];

  /**
   *
   */
}
