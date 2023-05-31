import { Card } from '../../card';

export interface VRCard extends Card {
  processor: 'vr';
  token: {
    id: string;
  };
}
