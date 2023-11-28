import { CourierProfile } from '.';
import { Timestamp } from '../external/firebase';

export type PublicCourier = Pick<
  CourierProfile,
  | 'about'
  | 'code'
  | 'fleetsIds'
  | 'mode'
  | 'situation'
  | 'statistics'
  | 'name'
  | 'surname'
> & {
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
};
