import { FieldValue } from 'firebase/firestore';
import { ClientFlavor } from '../platform';

export interface BannersOrdering {
  [key: string]: string[];
}

export type BannerTargetOptions = 'disabled' | 'page' | 'download';

export interface Banner {
  updatedBy: {
    id: string;
    email: string;
    name?: string;
  };
  name: string;
  flavor: ClientFlavor;
  target: BannerTargetOptions;
  link?: string;
  webImageType?: string;
  mobileImageType?: string;
  enabled: boolean;
  createdOn: FieldValue;
  updatedOn: FieldValue;
  images?: (string | null)[];
}
