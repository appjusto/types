import { LatLng } from '../platform';

export interface BasePayload {
  meta: {
    version: string | null;
    ip?: string;
  };
}

export interface FetchTotalCouriersNearbyPayload extends BasePayload {
  location: LatLng;
  distance: number;
}
