import { AleloPayableWith } from '..';
import { Card } from '../../card';

export interface AleloCard extends Card {
  processor: 'cielo';
  type: AleloPayableWith;
  token: {
    id: string;
    data: {
      brand: 'alelo';
      display_number: string; // XXXX-XXXX-XXXX-1111
      last_digits: string;
      holder_name: string;
      month: number;
      year: number;
    };
  };
}
