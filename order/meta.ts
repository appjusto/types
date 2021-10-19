import { IncomingHttpHeaders } from 'http';

export interface OrderMeta {
  headers: IncomingHttpHeaders;
  ip: string;
  app: {
    version: string;
  };
}
