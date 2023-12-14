import { LatLng } from '../platform';

export interface BasePayloadMeta {
  version: string | null;
  platform?: 'mobile' | 'web';
  ip?: string;
}
export interface BasePayload {
  meta: BasePayloadMeta;
}

export interface FetchTotalCouriersNearbyPayload extends BasePayload {
  location: LatLng;
  distance: number;
}
