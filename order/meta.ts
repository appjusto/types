import { LatLng } from '..';

export interface OrderMeta {
  headers: object;
  rawRequestIP: string;
  publicIP?: string;
  location: LatLng | null;
  app: {
    version: string;
  };
}
