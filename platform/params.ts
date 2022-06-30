export interface PlatformParams {
  matching: {
    maxDistance: number; // in meters
    maxDistanceToOrigin: number; // in meters
    locationFreshnessThreshold: number; // in seconds
    timeBeforeReady: number; // amount of time (in seconds) before expected readiness to start matching;
    maxTimeOfArrivalFactor: number; // multiplier used to calculate maxTimeOfArrival
    bicyclingDurationFactor: number; // multipler used to calculate duration for byciling
    averageWaitingTime: number; // in seconds
    minActiveCouriersInFleet: number; // minimum number of couriers that a fleet needs in order to receive an OrderRequest
  };
  orders: {
    limits: {
      quote: number; // in seconds
      confirmed: number; // in seconds
      declined: number; // in seconds
      dispatching: number; // in seconds
      nomatch: number; // in seconds
    };
  };
  marketplace: {
    maxWithdraws: number;
    advances: {
      daysOfWeek: number[];
      startAt: number;
      endAt: number;
      advanceableAfterHours: number;
    };
  };
  courier: {
    approveAfterVerified: boolean;
    /**
     * @deprecated
     */
    advanceableAfterHours: number;
    delayBeforeAdvancing: number; // in seconds
    limits: {
      availableWithoutUpdates: number; // in seconds
    };
    restrictWithdrawTo: string[];
  };
  business: {
    approveAfterVerified: boolean;
    keepAliveThreshold: number; // number of seconds to start refusing orders
    averageCookingTime: number; // in seconds
  };
  consumer: {
    pixEnabled: boolean;
    approveAfterSubmitted: boolean;
    support: {
      starts: string;
      ends: string;
    };
  };
}

export interface PlatformManagement {
  backupsEnabled: boolean;
  staffTokens: string[];
  marketplace: {
    chargeDelay: number;
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
  warehouse: {
    business: {
      updateAt: string[];
    };
  };
}
