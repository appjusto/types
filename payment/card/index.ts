import { Timestamp } from '../../external/firebase';

export interface Card {
  processor: string;
  accountId: string;
  accountType: 'consumer';
  cardHash: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  status: 'enabled' | 'disabled';
}
