import { BaseOrder } from '..';

export interface P2POrder extends BaseOrder {
  type: 'p2p';
}
