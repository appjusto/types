export interface PlatformManagement {
  backupsEnabled: boolean;
  orders: {
    limits: {
      quote: number; // in seconds
      confirming: number; // in seconds
      confirmed: number; // in seconds
      declined: number; // in seconds
      dispatching: number; // in seconds
      readyAsTakeAway: number; // in seconds
      nomatch: number; // in seconds
    };
    flags: {
      confirmed: number; // in seconds
      notifyConsumer: number; // in seconds
      matching: number; // in seconds
      outsource: number; // in seconds
      arrivedPickup: number; // in seconds
      goingDestination: number; // in seconds
    };
  };
  delivery: {
    autoOutsource: boolean;
    autoSafe: boolean;
  };
  marketplace: {
    chargeDelay: number;
    version?: string;
  };
  businesses: {
    callToConfirm: boolean;
  };
  location: {
    database: {
      enabled: boolean;
    };
    cache: {
      enabled: boolean;
      ttl: number; // minutes
    };
  };
  notifications: {
    minimumHoursInterval: number;
    consumerMinimumInterval: number;
  };
  warehouse: {
    business: {
      updateAt: string[];
    };
  };
}
