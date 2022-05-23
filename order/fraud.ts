export interface OrderFraudPreventionFlags {
  consumerHasConfirmedPhoneNumber?: boolean;
  consumerHasPlacedTooManyOrdersRecently?: boolean;
  consumerHasSuspectInvoices?: boolean;
  newUser?: boolean;
  highTicketPrice?: boolean;
  flaggedLocationsNearby?: boolean;
}
