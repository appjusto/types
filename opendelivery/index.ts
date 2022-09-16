export interface OpenDeliveryConfig {
  appId: string;
}

export interface OpenDeliverySoftwareService {
  name: string;
  baseURL: string;
}

export interface OpenDeliveryIntegration {
  softwareService: OpenDeliverySoftwareService;
  merchantId: string;
  apiKey?: string;
}
