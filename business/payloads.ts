import { BasePayload } from '../payloads';

export interface CreateBusinessProfilePayload extends BasePayload {
  operation: 'create';
}

export interface UpdateBusinessSlugPayload extends BasePayload {
  operation: 'update-slug';
  businessId: string;
  slug: string;
}

export interface CloneBusinessPayload extends BasePayload {
  operation: 'clone';
  businessId: string;
}

export type BusinessProfilePayload =
  | CreateBusinessProfilePayload
  | UpdateBusinessSlugPayload
  | CloneBusinessPayload;

export interface DeleteBusinessPayload extends BasePayload {
  businessId?: string;
  fewOrders?: boolean;
  appjustoProblems?: boolean;
  notFinanciallyViable?: boolean;
  didntAdaptToTheSystem?: boolean;
  closingThisRestaurant?: boolean;
  exclusivityWithAnotherPlatform?: boolean;
  other?: boolean;
  comment?: string;
}
