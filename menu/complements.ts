import { WithId } from '../platform';

export interface ComplementGroup {
  name: string;
  required: boolean;
  minimum: number;
  maximum: number;
  // transient
  items?: WithId<Complement>[];
}

export interface Complement {
  imageExists?: boolean;
  name: string;
  description?: string;
  price: number;
  enabled?: boolean;
  externalId?: string;
}
