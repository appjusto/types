import { Timestamp } from '../firebase';
import { IzaApiPerson } from './payloads';

export interface IzaPerson {
  courierId: string;
  person: IzaApiPerson;
}

export type IzaPeriodStatus = 'started' | 'finished' | 'canceled';

export interface IzaPeriod {
  status: IzaPeriodStatus;
  orderId: string;
  courierId: string;
  externalId: string;
  startedAt: Timestamp;
  finishedAt?: Timestamp;
}
