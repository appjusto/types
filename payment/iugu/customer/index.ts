import { IuguPayableWith } from '../invoice';

export interface IuguCustomer {
  accountId: string;
  externalId: string;
  email: string;
  name: string;
  defaultPaymentMethod?: IuguPayableWith;
  defaultPaymentMethodId?: string;
}
