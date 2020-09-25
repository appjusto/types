import { PaymentToken } from '.';

export const validatePaymentToken = (value: PaymentToken): boolean => {
  if (!value) return false;
  if (!value.brand) return false;
  if (!value.displayNumber) return false;
  if (!value.holderName) return false;
  if (!value.id) return false;
  if (!value.month) return false;
  if (!value.year) return false;
  return true;
};
