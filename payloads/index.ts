import { LatLng } from '../platform';

export interface PayloadMeta {
  version: string | null;
}

export interface FetchTotalCouriersNearbyPayload {
  location: LatLng;
  distance: number;
  meta: PayloadMeta;
}
