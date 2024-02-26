import { Timestamp } from '../external/firebase';
import { GeolocatedDocument } from '../location';
import { Fulfillment } from '../order';
import { PayableWith } from '../payment';
import { LatLng } from '../platform';
import { Fee } from '../platform/fees';
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
}

export type CookingTimeMode = 'manual' | 'auto';
export interface BusinessSettings {
  cookingTimeMode: CookingTimeMode;
  acknowledgeInsurance?: boolean;
}

export type BusinessType = 'restaurant';
export type BusinessStatus = 'available' | 'unavailable';

export type BusinessServiceName = 'insurance' | 'logistics';
export interface BusinessService {
  name: BusinessServiceName;
  fee: Fee;
  createdBy?:
    | 'platform'
    | {
        id: string;
        email: string;
      };
  createdOn?: number; // in milliseconds due to firebase limitations
}

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
export interface Business extends GeolocatedDocument {
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
  customerSuccessId?: string | null;
  businessAddress?: BusinessAddress;
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
  reviewsByCouriers?: BusinessReviews;
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
  fleetsIdsAllowed?: string[]; // ids of fleets allowed
  availableAt?: Timestamp | null;
  // matchingMode: MatchingMode;
  tags?: BusinessTag[];
  services?: BusinessService[];
  // metadata
  timestamps: ProfileTimestamps;
  keepAlive?: Timestamp;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
}

export type PreparationMode = 'realtime' | 'scheduled';
// export type MatchingMode = 'auto' | 'manual';

export interface BusinessChange {
  before: Partial<Business>;
  after: Partial<Business>;
  timestamp: Timestamp;
}

export interface BusinessMenuMessage {
  title: string;
  description: string;
}
