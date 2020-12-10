import { IuguBankName } from "./payment/iugu";

export interface Bank {
  id: string;
  name: IuguBankName;
}

export type BankAccountType = 'Corrente' | 'Poupança';

export interface BankAccount extends Bank {
  agency: string;
  account: string;
  digit: string;
  type: BankAccountType;
}