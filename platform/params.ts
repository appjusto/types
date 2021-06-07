export interface PlatformParams {
  maxDistanceToOrigin: number; // in meters
  maxDistance: number; // in meters
  averageCookingTime: number; // in seconds
  averageWaitingTime: number; // in seconds
  maxTimeOfArrivalFactor: number; // multipler used to calculate maxTimeOfArrival
  bicyclingDurationFactor: number; // multipler used to calculate duration for byciling
  matchingTimeBeforeReady: number; // amount of time (in seconds) before expected readiness to start matching;
  matching: {
    locationFreshnessThreshold: number; // 10 minutes
  };
  courier: {
    approveAfterVerified: boolean;
  };
  business: {
    approveAfterVerified: boolean;
    keepAliveThreshold: number; // number of seconds to start refusing orders
  };
  maintenance: {
    backupsEnabled: boolean;
  };
}
