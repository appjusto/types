import { Place } from '..';
import { GeoPoint, Timestamp } from '../external/firebase';
import { Fulfillment } from '../order';
import { PayableWith } from '../payment';
import { LatLng } from '../platform';
import { ProfileSituation, ProfileTimestamps } from '../profile';
import { BusinessTag } from './tags';

export interface BusinessAddress {
  cep: string;
  address: string;
  number?: string;
  additional?: string;
  instructions?: string;
  city: string;
  state: string;
  neighborhood?: string;
  latlng?: LatLng;
}

export interface BusinessReviews {
  positiveReviews: number;
  negativeReviews: number;
}

export interface BusinessStatistics {
  totalOrders: number;
  averagePreparationTime: number; // in seconds
  averageTicketPrice: number;
  averageWaitingTime: number;
  /**
   * @deprecated
   */
  positiveReviews: number;
  /**
   * @deprecated
   */
  negativeReviews: number;
}

export type CookingTimeMode = 'manual' | 'auto';
export interface BusinessSettings {
  cookingTimeMode: CookingTimeMode;
}

export type BusinessType = 'restaurant';
export type BusinessStatus = 'open' | 'closed';

export type ScheduleObject = {
  day: string;
  checked: boolean;
  schedule: { from: string; to: string }[];
};
export type BusinessSchedule = ScheduleObject[];

export type BusinessPhone = {
  type: 'owner' | 'manager' | 'desk';
  number: string;
  calls: boolean;
  whatsapp: boolean;
};
export interface Business {
  code: string;
  type: BusinessType;
  name?: string;
  companyName?: string;
  cnpj?: string;
  /**
   * @deprecated
   */
  phone?: string;
  phones?: BusinessPhone[];
  managers?: string[]; // emails
  accountManagerId?: string | null;
  businessAddress?: BusinessAddress;
  coordinates?: GeoPoint;
  g?: {
    geopoint: GeoPoint;
    geohash: string;
  };
  status: BusinessStatus;
  situation: ProfileSituation;
  enabled: boolean;
  profileIssues?: string[];
  profileIssuesMessage?: string;
  cuisine?: string; // cuisine's name
  description?: string;
  minimumOrder?: number; // in cents
  averageCookingTime?: number; // in seconds
  orderAcceptanceTime?: number | null; // in seconds
  deliveryRange?: number; // in meters
  statistics?: BusinessStatistics;
  reviews?: BusinessReviews;
  onboarding?: string;
  logoExists: boolean;
  coverImageExists: boolean;
  schedules: BusinessSchedule;
  orderPrinting?: boolean;
  slug?: string;
  averageDiscount?: number;
  settings?: BusinessSettings;
  fulfillment?: Fulfillment[];
  acceptedPaymentMethods?: PayableWith[];
  preparationModes?: PreparationMode[];
  maxOrdersPerHour?: number;
  minHoursForScheduledOrders?: number;
  // matchingMode: MatchingMode;
  tags?: BusinessTag[];
  // metadata
  timestamps: ProfileTimestamps;
  keepAlive?: Timestamp;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}

export type PreparationMode = 'realtime' | 'scheduled';
// export type MatchingMode = 'auto' | 'manual';

export interface BusinessRecommendation {
  recommendedBusiness: Place;
  consumerId: string | null;
  instagram: string | null;
  phone: string | null;
  owner: string | null;
  createdOn: Timestamp;
}

export interface BusinessChange {
  before: Partial<Business>;
  after: Partial<Business>;
  timestamp: Timestamp;
}

export interface BusinessMenuMessage {
  title: string;
  description: string;
}
