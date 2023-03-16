import { Measurement, PriceBreakdown, StopWithContact } from './models';
import { LalamoveOrderStatus } from './status';

export interface IOrder {
  id: string;
  quotationId: string;
  priceBreakdown: PriceBreakdown;
  driverId: string;
  shareLink: string;
  status: LalamoveOrderStatus;
  distance: Measurement;
  stops: StopWithContact[];
  metadata: object;
}
