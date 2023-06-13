export type HubsterStoreStatus = 'available' | 'unavailable';

export type HubsterStoreMenuSource = 'appjusto' | 'hubster';

export interface HubsterStore {
  businessId: string;
  storeId: string;
  status: HubsterStoreStatus;
  menuSource?: HubsterStoreMenuSource;
}
