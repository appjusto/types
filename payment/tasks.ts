export type AccountType = 'courier' | 'business';

export interface AccountTaskPayload {
  type: AccountType;
  id: string;
  recreate?: boolean;
}
