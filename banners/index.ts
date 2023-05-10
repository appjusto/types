import { Timestamp } from '../external/firebase';
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
  createdOn: Timestamp;
  updatedOn: Timestamp;
  images?: (string | null)[];
}
