import { IuguBankName } from "./payment/iugu";

export interface Bank {
  name: IuguBankName;
}

export type BankAccountType = 'Corrente' | 'Poupança';

export interface BankAccount {
  name: string;
  agency: string;
  account: string;
  digit: string;
  type: BankAccountType;
}