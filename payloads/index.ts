import { LatLng } from '../platform';

export interface BasePayload {
  meta: {
    version: string | null;
  };
}

export interface FetchTotalCouriersNearbyPayload extends BasePayload {
  location: LatLng;
  distance: number;
}
