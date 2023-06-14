import { Card } from '../../card';

export type VRPayableWith = 'vr-alimentação' | 'vr-refeição';
export interface VRCard extends Card {
  processor: 'vr';
  type: VRPayableWith;
  token: {
    id: string;
    data: {
      brand: 'vr';
      display_number: string; // XXXX-XXXX-XXXX-1111
      last_digits: string;
      holder_name: string;
      month: number;
      year: number;
    };
  };
}
