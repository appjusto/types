import { Timestamp } from '../../external/firebase';

export interface Card {
  processor: string;
  type: string;
  accountId: string;
  accountType: 'consumer';
  hash?: string | null;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  status: 'enabled' | 'disabled';
}
