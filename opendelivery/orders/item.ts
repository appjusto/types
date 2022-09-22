import { Price } from '../price';

export interface OrderItem {
  /**
   * A unique identifier of the item.
   */
  id: string;

  /**
   * Item's position.
   */
  index?: number;

  /**
   * Item name
   * <= 150 characters
   */
  name: string;

  /**
   * Item External Code. (Tipically the merchant Software Service item code)
   */
  externalCode: string;

  /**
   * Measure Unit of the Item.
   */
  unit: string;

  /**
   * EAN (European Article Number)
   */
  ean?: string;

  /**
   * Amount of items.
   */
  quantity: number;

  /**
   * Special instructions about the items.
   */
  specialInstructions?: string;

  /**
   * Price per unit.
   */
  unitPrice: Price;

  /**
   * Pricing options.
   */
  optionsPrice?: Price;

  /**
   * Total Price of the item. (quantity * unitPrice + optionsPrice)
   */
  totalPrice: Price;

  options?: [
    {
      /**
       * A unique identifier of the option.
       */
      id: string;

      /**
       * Options's position.
       */
      index?: number;

      /**
       * Options name
       */
      name: string;

      /**
       * External product code.
       */
      externalCode: string;

      /**
       * Measure Unit of the Item.
       */
      unit: string;

      /**
       * 	EAN is the barcode standard used on items.
       */
      ean?: string;

      /**
       * Amount of items.
       */
      quantity: number;

      /**
       * Price per unit.
       */
      unitPrice: Price;

      /**
       * Total Price of the option. (quantity * unitPrice)
       */
      totalPrice: Price;

      /**
       * More instructions, if needed.
       */
      specialInstructions?: string;
    }
  ];
}
