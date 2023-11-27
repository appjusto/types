import {
  BusinessAddress,
  BusinessStatistics,
  BusinessStatus,
  PreparationMode,
} from '.';
import {
  BusinessReviews,
  BusinessSchedule,
  BusinessTag,
  Fulfillment,
  PayableWith,
} from '..';
import { Timestamp } from '../external/firebase';
import { LatLng2 } from '../platform';

export interface BusinessAlgolia {
  objectID: string;
  _geoloc: LatLng2 | null;
  situation: string;
  enabled: boolean;
  status: BusinessStatus;
  opened: boolean;
  name?: string;
  slug?: string;
  code?: string;
  cnpj?: string;
  managerEmail?: string;
  onboarding?: string;
  description?: string;
  businessAddress?: BusinessAddress;
  fulfillment?: Fulfillment[];
  acceptedPaymentMethods?: PayableWith[];
  preparationModes?: PreparationMode[];
  tags?: BusinessTag[];
  cuisine?: string;
  deliveryRange?: number;
  statistics?: BusinessStatistics;
  averageDiscount?: number;
  schedules: BusinessSchedule;
  reviews?: BusinessReviews;
  createdOn: Timestamp;
}
