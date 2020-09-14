import { UserProfile } from './profile';

// export interface SaveCardPayload {
//   holderName: string;
//   holderDocument: string;
//   number: string;
//   cvv: string;
//   expirationMonth: string;
//   expirationYear: string;
// }

export interface Card {
  id: string;
  holderName: string; // holder_name
  holderDocument: string; // holder_document
  lastFourDigits: string; // last_four_digits
  expirationMonth: string; // exp_month
  expirationYear: string; // exp_year
  brand: string;
}

export interface ConsumerProfile extends UserProfile {
  paymentChannelId?: string;
  cards?: Card[];
  lastCardId?: string;
}
