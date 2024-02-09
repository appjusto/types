import { DispatchingStatus, FareDetails, OrderRoute, OrderType } from '..';
import { Timestamp } from '../external/firebase';
import { FleetType } from '../fleet';

export interface Matching {
  type: OrderType;
  status: DispatchingStatus;
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
