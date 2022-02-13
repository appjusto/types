import { IncomingHttpHeaders } from 'http';
import { LatLng } from '..';

export interface OrderMeta {
  headers: IncomingHttpHeaders;
  rawRequestIP: string;
  publicIP?: string;
  location: LatLng | null;
  app: {
    version: string;
  };
}
