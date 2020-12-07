import { UserProfile } from "./profile";

export interface Business {
  name: string;
  status: 'open' | 'closed';
  type: 'restaurant';
}

export interface BusinessManagerProfile extends UserProfile {

}
