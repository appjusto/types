import { PriceBreakdown, Stop } from './models';

export interface IQuotation {
  id: string;
  scheduleAt: Date;
  serviceType: string;
  specialRequests: string[];
  expiresAt: Date;
  priceBreakdown: PriceBreakdown;
  isRouteOptimized: boolean;
  stops: Stop[];
}
