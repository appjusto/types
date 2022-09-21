export interface Image {
  /**
   * URL pointing to an image of the merchant logo or banner.
   * Image requirements:
   * Hosted on a secure connection (SSL).
   * File size must be less than 10MB.
   * Image must be in JPEG, PNG or GIF format.
   * Both width and height must be between 320px and 1144px.
   */
  URL: string;

  /**
   * CRC-32 of the image file. This field can be used to check for changes in the image file.
   */
  'CRC-32'?: string;
}
