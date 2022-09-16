export interface Price {
  /**
   * Price value. 4 decimals places are accepted
   */
  value: number;

  /**
   * The 3-letter ISO 4217 currency code.
   * format: ^[A-Z]{3}$
   * (BRL for Brazilian Real)
   */
  currency: string;
}
