import { Card } from '../../card';

export interface VRCard extends Card {
  processor: 'vr';
  method: 'vr';
  token: {
    id: string;
  };
}
