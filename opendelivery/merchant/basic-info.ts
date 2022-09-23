import { Address } from '../address';
import { LatLng } from '../location';
import { Price } from '../price';
import { MerchantCategory } from './category';
import { Image } from './image';
import { MerchantType } from './index';

export interface MerchantBasicInfo {
  /**
   * Merchant Public Name
   * <= 500 characters
   */
  name: string;

  /**
   * Merchant Document (CNPJ)
   * format: /^\d{14}$/
   */
  document: string;

  /**
   * Merchant Corporate Name (Razão Social)
   * <= 500 characters
   */
  corporateName: string;

  /**
   * Merchant Description
   */
  description: string;

  /**
   * Average Ticket. Can be used to show the price range of items available at the merchant. It is not mandatory, but recommended to be used.
   */
  averageTicket?: number;

  /**
   * Average amount of time preparing an order takes, in minutes.
   */
  averagePreparationTime: number;

  /**
   * Minimum order value that the merchant accepts.
   */
  minOrderValue: Price;

  /**
   * Merchant Type. Currently, only RESTAURANT is accepted.
   */
  merchantType: MerchantType;

  /**
   * Merchant Categories
   */
  merchantCategories: MerchantCategory[];

  /**
   * Merchant Address
   */
  address: MerchantAddress;

  /**
   * Merchant Contact Emails
   */
  contactEmails: string[];

  /**
   * Merchant Contact Phones
   */
  contactPhones: {
    commercialNumber: string;
    whatsappNumber?: string;
  };

  /**
   * Image to be used as the merchant logo
   */
  logoImage: Image;

  /**
   * Image to be used as the merchant banner (the banner display depends on the client application interface)
   */
  bannerImage: Image;

  /**
   * Merchant creation date and time.
   * (UTC date-time in ISO timestamp format).
   */
  createdAt: string;
}

export interface MerchantAddress extends Address, LatLng {}
