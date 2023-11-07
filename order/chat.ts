import { OrderStatus } from '..';
import { Timestamp } from '../external/firebase';
import { GeolocatedDocument } from '../location';
import { Flavor } from '../platform';

export type ChatMessageType =
  | 'business-consumer'
  | 'business-courier'
  | 'consumer-courier';

export interface ChatMessageUser {
  agent: Flavor;
  id: string;
  name?: string;
}

export interface ChatMessage extends GeolocatedDocument {
  orderId: string;
  orderCode?: string;
  participantsIds: string[];
  type: ChatMessageType;
  from: ChatMessageUser;
  to: ChatMessageUser;
  message: string;
  timestamp: Timestamp;
  orderStatus?: OrderStatus;
  read?: boolean;
}

export type ChatPublicMessageType = 'available-couriers';

export interface ChatPublicMessage extends GeolocatedDocument {
  type: ChatPublicMessageType;
  from: {
    agent: Flavor;
    id?: string;
  };
}
