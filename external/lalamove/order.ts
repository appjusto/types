import { Measurement, PriceBreakdown, StopWithContact } from './models';

export interface IOrder {
  id: string;
  quotationId: string;
  priceBreakdown: PriceBreakdown;
  driverId: string;
  shareLink: string;
  status: string;
  distance: Measurement;
  stops: StopWithContact[];
  metadata: object;
}
