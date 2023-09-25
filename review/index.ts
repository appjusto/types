import { ClientFlavor, Flavor } from '..';
import { Timestamp } from '../external/firebase';

export type ReviewType = 'positive' | 'negative';

export interface Review {
  type: ReviewType;
  orderId?: string;
  comment?: string;
  createdOn?: Timestamp;
}

export interface OrderReview {
  orderId: string;
  createdBy?: {
    id: string;
    flavor: ClientFlavor;
  };
  platform?: {
    rating: ReviewType;
    tags?: ReviewTag[] | null;
  };
  nps?: number;
  comment?: string;
  reviewedOn?: Timestamp;
}
export interface OrderConsumerReview extends OrderReview {
  /**
   * @deprecated
   */
  consumer: {
    id: string;
  };
  business?: {
    id: string | null;
    rating: ReviewType;
    tags?: ReviewTag[] | null;
  };
  courier?: {
    id: string | null;
    rating: ReviewType;
    tags?: ReviewTag[] | null;
  };
}

export interface OrderCourierReview extends OrderReview {
  business?: {
    id: string | null;
    rating: ReviewType;
    tags?: ReviewTag[] | null;
  };
  consumer?: {
    id: string | null;
    rating: ReviewType;
    tags?: ReviewTag[] | null;
  };
}

export interface ReviewTag {
  agent: Flavor;
  type: ReviewType;
  id: string;
  title: string;
}
