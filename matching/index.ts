import { FareDetails, OrderRoute, OrderType } from '..';
import { Timestamp } from '../external/firebase';
import { FleetType } from '../fleet';

export interface Matching {
  type: OrderType;
  scheduledTo?: Timestamp | null;
  status: 'matchable' | 'unmatchable';
  fleet: {
    id: string;
    type: FleetType;
    name: string;
  } | null;
  fee: FareDetails | null;
  route: OrderRoute | null;
  origin: string;
  destination: string;
  task: string | null;
  attempt: number;
  trials: number;
  readyAt: Timestamp | null;
  createdAt: Timestamp;
}
