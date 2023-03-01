import { LatLng2 } from '../../platform';

export type LalamoveEventType =
  | 'ORDER_STATUS_CHANGED'
  | 'DRIVER_ASSIGNED'
  | 'ORDER_AMOUNT_CHANGED'
  | 'ORDER_REPLACED'
  | 'WALLET_BALANCE_CHANGED';

export type LalamoveOrderStatus =
  | 'ASSIGNING_DRIVER'
  | 'DRIVER_ASSIGNED'
  | 'ON_GOING'
  | 'PICKED_UP'
  | 'COMPLETED'
  | 'EXPIRED'
  | 'CANCELED'
  | 'REJECTED';

export interface LalamoveOrderUpdatePayload {
  apiKey: string;
  timestamp: number;
  signature: string;
  eventId: string;
  eventType: LalamoveEventType;
  data: {
    order: {
      orderId: string;
      market: string;
      status: LalamoveOrderStatus;
      driverId: string;
      shareLink: string;
      previousStatus: LalamoveOrderStatus;
      updatedAt: string;
    };
    driver: {
      driverId: string;
      name: string;
      phone: string;
      photo: string;
      plateNumber: string;
    };
    location: LatLng2;
  };
}
