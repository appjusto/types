export interface Stop {
  id?: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  address: string;
}

export interface StopWithContact extends Stop {
  name: string;
  phone: string;
  POD?: object;
}

export interface Measurement {
  value: string;
  unit: string;
}

export interface PriceBreakdown {
  base?: string;
  extraMileage?: string;
  surcharge?: string;
  coupon?: string;
  specialRequests?: string;
  priorityFee?: string;
  priorityFeeVat?: string;
  specialVehicle?: string;
  minimumSurcharge?: string;
  discountCap?: string;
  insurance?: string;
  multiStopSurcharge?: string;
  surchargeDiscount?: string;
  vat?: string;
  customerSupportDiscretionary?: string;
  totalBeforeOptimization?: string;
  totalExcludePriorityFee?: string;
  total: string;
  currency: string;
}

export interface Contact {
  name: string;
  phone: string;
}

export interface Coordinates {
  lat: string;
  lng: string;
}
export interface IDriver {
  id: string;
  contact: Contact;
  plateNumber: string;
  photo: string;
  coordinates: Coordinates;
  updatedAt: Date;
}
