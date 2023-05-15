export type HubsterStoreStatus = 'available' | 'unavailable';

export interface HubsterStore {
  businessId: string;
  storeId: string;
  status: HubsterStoreStatus;
}
