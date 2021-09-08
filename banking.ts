export interface Bank {
  code: string;
  name: string;
  agencyPattern: string;
  accountPattern: string;
  warning?: string;
  order?: number;
}

export type BankAccountType =
  | 'Corrente'
  | 'Poupança'
  | 'Simples'
  | 'Nova Poupança';
export type BankAccountPersonType = 'Pessoa Física' | 'Pessoa Jurídica';

export interface BankAccount {
  type: BankAccountType;
  personType: BankAccountPersonType;
  name: string;
  agency: string;
  agencyFormatted: string;
  account: string;
  accountFormatted: string;
}
