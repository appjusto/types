import { Fleet } from '../fleet';
import { WithId } from '../platform';

export interface Fare {
  fleet: WithId<Fleet>;
  courierFee: number; // in cents
  platformFee: number; // in cents
  taxes: number; // (percent as decimal; ex: for 2%, set 2.0)
  financialFee: number; // (percent as decimal; ex: for 2.31%, set 2.31)
  total: number; // in cents
}
