export interface PlatformParams {
  matching: {
    maxDistance: number; // in meters
    maxDistanceToOrigin: number; // in meters
    locationFreshnessThreshold: number; // in seconds
    timeBeforeReady: number; // amount of time (in seconds) before expected readiness to start matching;
    maxTimeOfArrivalFactor: number; // multiplier used to calculate maxTimeOfArrival
    bicyclingDurationFactor: number; // multipler used to calculate duration for byciling
    averageWaitingTime: number; // in seconds
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
  };
  courier: {
    approveAfterVerified: boolean;
    restrictWithdrawTo: string[];
    delayBeforeAdvancing: number; // in seconds
    limits: {
      availableWithoutUpdates: number; // in seconds
    };
  };
  business: {
    approveAfterVerified: boolean;
    keepAliveThreshold: number; // number of seconds to start refusing orders
    averageCookingTime: number; // in seconds
  };
  consumer: {
    approveAfterSubmitted: boolean;
  };
}

export interface PlatformManagement {
  backupsEnabled: boolean;
  staffTokens: string[];
}
