export interface Bank {
  name: string;
}

export type BankAccountType = 'Corrente' | 'Poupança';

export interface BankAccount {
  name: string;
  agency: string;
  account: string;
  digit: string;
  type: BankAccountType;
}