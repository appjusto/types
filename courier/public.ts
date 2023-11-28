import { CourierProfile } from '.';
import { Timestamp } from '../external/firebase';

export type PublicCourier = Pick<
  CourierProfile,
  'about' | 'code' | 'fleetsIds' | 'mode' | 'statistics' | 'name'
> & {
  createdAt: Timestamp;
};
