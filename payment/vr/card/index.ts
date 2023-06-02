import { Card } from '../../card';

export interface VRCard extends Card {
  processor: 'vr';
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
