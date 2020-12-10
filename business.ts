import { WithId } from "./platform";
import { ProfileSituation } from "./profile";

export interface Cuisine {
  name: string;
}

export interface Business {
  name: string;
  status: 'open' | 'closed';
  situation: ProfileSituation;
  cnpj?: string;
  cuisine?: WithId<Cuisine>;
  description?: string;
  minimumOrder?: number; // in cents
}
