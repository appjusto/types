import { Timestamp } from '../firebase';

export interface IzaPerson {
  courierId: string;
  doc: string;
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
