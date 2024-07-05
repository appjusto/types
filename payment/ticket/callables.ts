import { TicketProduct } from '.';

export interface GetTicketBalanceResult {
  balance: number;
  account: string | null;
  product: TicketProduct | null;
}
