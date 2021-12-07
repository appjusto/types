import { IncomingHttpHeaders } from 'http';
import { LatLng } from '..';

export interface OrderMeta {
  headers: IncomingHttpHeaders;
  ip: string;
  location: LatLng | null;
  app: {
    version: string;
  };
}
