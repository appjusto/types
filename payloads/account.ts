import { BasePayload } from '.';
import { AccountType } from '../payment/tasks';

export interface FetchAccountInformationPayload extends BasePayload {
  accountType: AccountType;
  accountId: string;
}
