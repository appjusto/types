import { Timestamp } from '../firebase';
import { IzaApiPerson } from './payloads';

export interface IzaPerson {
  doc: string;
  birthday: string;
  name: string;
  courierId: string;
  person: IzaApiPerson;
  createdAt: Timestamp;
}

export interface IzaContract {
  doc: string;
  courierId: string;
  contractId: string;
  createdAt: Timestamp;
}

export type IzaPeriodStatus = 'started' | 'finished' | 'canceled';

export interface IzaPeriod {
  status: IzaPeriodStatus;
  orderId: string;
  doc: string;
  courierId: string;
  externalId: string;
  startedAt: Timestamp;
  updatedAt?: Timestamp;
}
