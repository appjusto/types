export interface GetTicketBalanceResult {
  balance: number;
  account: string | null;
  product: 'TRE' | string | null;
}
