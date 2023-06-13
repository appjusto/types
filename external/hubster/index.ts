export type HubsterStoreStatus = 'available' | 'unavailable';

export interface HubsterStore {
  businessId: string;
  storeId: string;
  status: HubsterStoreStatus;
  menu?: {
    source: 'appjusto' | 'hubster';
    sync: boolean;
  };
}
