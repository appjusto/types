import { Card } from '../../../card';

export type TicketPayableWith = 'ticket-refeição' | 'ticket-alimentação';

export interface TicketCard extends Card {
  processor: 'braspag';
  type: TicketPayableWith;
  token: {
    id: string;
    data: {
      brand: 'ticket';
      display_number: string; // XXXX-XXXX-XXXX-1111
      last_digits: string;
      holder_name: string;
      month: number;
      year: number;
    };
  };
}
