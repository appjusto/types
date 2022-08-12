import { FieldValue } from 'firebase/firestore';
import { Generic } from '../generics';

export interface Application {
  name: string;
  secret: string;
  limits: {
    maxRequestsPerHour: number;
    maxRequestsPerDay: number;
    maxRequestsPerMonth: number;
  };
  disallowRequestsUntil?: FieldValue;
}

export interface ApplicationToken {
  secret: string;
}

export type ApplicationService = 'maps:directions';

export interface ApplicationCall {
  timestamp: FieldValue;
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
