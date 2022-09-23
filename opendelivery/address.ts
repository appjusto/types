export interface Address {
  /**
   * Two-letter ISO 3166-1 alpha-2 country code.
   * format: ^[A-Z]{2}$
   */
  country: string;

  /**
   * State or country subdivision. It is recommended (but not required) that you use the ISO 3166-2 representation.
   */
  state: string;

  /**
   * City name
   */
  city: string;

  /**
   * District or Neighborhood name.
   */
  district: string;

  /**
   * Street Name.
   */
  street: string;

  /**
   * Street Number.
   */
  number: number;

  /**
   * Postal Code.
   */
  postalCode: string;

  /**
   * Address complement.
   */
  complement?: string;

  /**
   * Address complement.
   */
  reference?: string;
}
