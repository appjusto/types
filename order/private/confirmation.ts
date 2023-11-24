export interface OrderConfirmation {
  handshakeChallenge: string;
  handshakeResponse?: string | null;
  deliveredTo?: string | null;
  comment?: string | null;
  completedBy?: string;
}
