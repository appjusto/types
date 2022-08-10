export interface OrderFraudPreventionFlags {
  consumerHasConfirmedPhoneNumber?: boolean;
  consumerHasPlacedTooManyOrdersRecently?: boolean;
  consumerHasSuspectInvoices?: boolean;
  consumerConsideredSafe?: boolean;
  newUser?: boolean;
  highTicketPrice?: boolean;
  flaggedLocationsNearby?: boolean;
}
