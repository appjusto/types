import { UserProfile } from "./profile";

export interface Business {
  name: string;
  status: 'open' | 'closed';
}

export interface BusinessManagerProfile extends UserProfile {

}
