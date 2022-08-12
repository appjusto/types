import { FieldValue } from 'firebase/firestore';

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
