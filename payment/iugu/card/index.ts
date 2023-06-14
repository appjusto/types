import { Card } from '../../card';
import { IuguCustomerPaymentMethod } from '../api/methods';

export interface IuguCard extends Card {
  processor: 'iugu';
  type: 'credit_card';
  token: IuguCustomerPaymentMethod | null;
}
