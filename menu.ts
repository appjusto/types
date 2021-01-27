import { WithId } from './platform';

export interface Ordering {
  firstLevelIds: string[];
  secondLevelIdsByFirstLevelId: {
    [firstLevelId: string]: string[];
  };
}

export interface Category {
  name: string;
  enabled: boolean;
  // transient
  items?: WithId<Product>[];
}

export interface Product {
  name: string;
  description?: string;
  imageExists?: boolean;
  price: number;
  externalId?: string;
  enabled: boolean;
  classifications: string[];
  complementsEnabled?: boolean;
  complementsOrder?: MenuConfig;
}

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
  externalId?: string;
}
