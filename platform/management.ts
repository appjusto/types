export interface PlatformManagement {
  backupsEnabled: boolean;
  orders: {
    limits: {
      quote: number; // in seconds
      confirming: number; // in seconds
      confirmed: number; // in seconds
      declined: number; // in seconds
      dispatching: number; // in seconds
      nomatch: number; // in seconds
    };
    flags: {
      confirmed: number; // in seconds
      matching: number; // in seconds
    };
  };
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
