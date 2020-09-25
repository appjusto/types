import { IuguMarketplaceAccount, IuguPaymentToken } from './iugu';

export const validateMarketplaceAccount = (
  value: IuguMarketplaceAccount
): boolean => {
  if (!value) return false;
  if (!value.account_id) return false;
  if (!value.live_api_token) return false;
  if (!value.test_api_token) return false;
  if (!value.name) return false;
  if (!value.user_token) return false;
  return true;
};

export const validatePaymentToken = (value: IuguPaymentToken): boolean => {
  if (!value) return false;
  if (!value.id) return false;
  if (!value.extra_info) return false;
  if (!value.extra_info.brand) return false;
  if (!value.extra_info.display_number) return false;
  if (!value.extra_info.holder_name) return false;
  if (!value.extra_info.month) return false;
  if (!value.extra_info.year) return false;
  return true;
};
