import { OrderPayment } from './payment';

export interface OrderPrivatePlatform {
  handshakeChallenge?: string;
  handshakeResponse?: string;
  payment: OrderPayment;
}
