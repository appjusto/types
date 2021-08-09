import { BasePayload } from '.';
import { AccountType } from '../payment/tasks';

export interface AccountBasePayload extends BasePayload {
  accountType: AccountType;
  accountId: string;
}

export interface FetchAccountInformationPayload extends AccountBasePayload {}
export interface FetchAccountInformationResponse {
  balance: string;
  balance_available_for_withdraw: string;
  receivable_balance: string;
}

export interface RequestWithdrawPayload extends AccountBasePayload {
  amount: number;
}

export interface FetchReceivablesPayload extends AccountBasePayload {}

export interface FetchAdvanceSimulationPayload extends AccountBasePayload {
  ids: number[];
}

export interface AdvanceReceivablesPayload extends AccountBasePayload {
  ids: number[];
}
