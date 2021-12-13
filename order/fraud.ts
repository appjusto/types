export interface OrderFraudPreventionFlags {
  consumerHasConfirmedPhoneNumber?: boolean;
  newUser?: boolean;
  highTicketPrice?: boolean;
  flaggedLocationsNearby?: boolean;
}
