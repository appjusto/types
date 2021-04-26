export interface Bank {
  code: string;
  name: string;
  agencyPattern: string;
  accountPattern: string;
  warning?: string;
  order?: number;
}

export type BankAccountType = 'Corrente' | 'Poupança';
export type BankAccountHolderType = 'PF' | 'PJ';

export interface BankAccount {
  type: BankAccountType;
  holder: BankAccountHolderType;
  name: string;
  agency: string;
  agencyFormatted: string;
  account: string;
  accountFormatted: string;
}
