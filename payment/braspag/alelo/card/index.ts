import { Card } from '../../../card';

export type AleloPayableWith = 'alelo-refeição' | 'alelo-alimentação';

export interface AleloCard extends Card {
  processor: 'braspag';
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
