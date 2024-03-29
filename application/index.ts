import { Timestamp } from '../external/firebase';
import { Generic } from '../generics';

export interface ApplicationLimits {
  maxRequestsPerHour: number;
  maxRequestsPerDay: number;
  maxRequestsPerMonth: number;
}

export interface Application {
  name: string;
  secret: string;
  limits: ApplicationLimits;
  disallowRequestsUntil?: Timestamp;
}

export interface ApplicationToken {
  secret: string;
}

export type ApplicationService = 'maps:directions';

export interface ApplicationCall {
  timestamp: Timestamp;
  method: string;
  path: string;
  query: Generic;
  error?: string;
  services?: ApplicationService[];
}

export interface QuoteResponse {
  value: number;
  distance: number;
  duration: number;
}
