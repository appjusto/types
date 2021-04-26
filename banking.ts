export interface Bank {
  code: string;
  name: string;
  agencyPattern: string;
  accountPattern: string;
  warning?: string;
  order?: number;
}

export type BankAccountType = 'Corrente' | 'Poupança';
export type BankAccountPersonType = 'Pessoa Física' | 'Pessoa Jurídica';

export type BankAccountPersonType = 'Pessoa Física' | 'Pessoa Jurídica';

export interface BankAccount {
  type: BankAccountType;
  personType: BankAccountPersonType;
  name: string;
  agency: string;
  agencyFormatted: string;
  account: string;
  accountFormatted: string;
  personType?: BankAccountPersonType;
}
