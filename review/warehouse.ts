import { Timestamp } from 'firebase/firestore';
import { ReviewTag, ReviewType } from '.';

export interface OrderReviewWarehouse {
  orderId: string;
  consumer: {
    id: string;
  };
  courier: {
    id: string | null;
    rating: ReviewType;
    tags: ReviewTag[] | null;
  } | null;
  business: {
    id: string;
    rating: ReviewType;
    tags: ReviewTag[] | null;
  } | null;
  platform: {
    rating: ReviewType;
    tags: ReviewTag[] | null;
  } | null;
  nps: number | null;
  createdOn: Timestamp;
}
