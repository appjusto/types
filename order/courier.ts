import { CourierMode, CourierStatistics } from '../courier';
import { Timestamp } from '../external/firebase';
import { LatLng } from '../platform';

interface PriceBreakdown {
  base?: string;
  extraMileage?: string;
  surcharge?: string;
  coupon?: string;
  specialRequests?: string;
  priorityFee?: string;
  priorityFeeVat?: string;
  specialVehicle?: string;
  minimumSurcharge?: string;
  discountCap?: string;
  insurance?: string;
  multiStopSurcharge?: string;
  surchargeDiscount?: string;
  vat?: string;
  customerSupportDiscretionary?: string;
  totalBeforeOptimization?: string;
  totalExcludePriorityFee?: string;
  total: string;
  currency: string;
}

interface Stop {
  id?: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  address: string;
}

export interface OrderQuotation {
  id: string;
  scheduleAt: Date;
  serviceType: string;
  specialRequests: string[];
  expiresAt: Date;
  priceBreakdown: PriceBreakdown;
  isRouteOptimized: boolean;
  stops: Stop[];
}

export interface OrderCourier {
  id?: string;
  name?: string;
  phone?: string;
  notificationToken?: string | null;
  location?: LatLng;
  distanceToOrigin: number | null;
  joined?: Timestamp;
  mode: CourierMode;
  statistics?: CourierStatistics;
  outsourcedOrderId?: string | null;
  quotation?: OrderQuotation | null;
  externalLink?: string | null;
  updatedOn?: Timestamp;
}
