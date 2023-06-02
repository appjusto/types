import { WithId } from '../platform';

export interface ComplementGroup {
  name: string;
  required: boolean;
  minimum: number;
  maximum: number;
  enabled?: boolean;
  externalId?: string;
  // transient
  items?: WithId<Complement>[];
}

export interface Complement {
  name: string;
  description?: string;
  /**
   * @deprecated
   */
  imageExists?: boolean;
  imageUrls?: string[];
  price: number;
  maximum?: number;
  enabled?: boolean;
  externalId?: string;
}
