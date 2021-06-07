export interface ServiceFee {
  platform: {
    fixed: number; // in cents
    percent: number;
  };
  taxes: number;
  processing: {
    fixed: number; // in cents
    percent: number;
  };
}

export interface PlatformFees {
  p2p: ServiceFee;
  food: ServiceFee;
}
