import { IuguCustomVariable } from '../invoice';

export interface IuguMarketplaceTransferRequest {
  receiver_id: string;
  amount_cents: number;
  custom_variables?: IuguCustomVariable[];
}

export interface IuguMarketplaceTransferResponse {
  id: string;
  created_at: string;
  amount_cents: string;
  amount_localized: string;
  receiver: {
    id: string;
    name: string;
  };
  sender: {
    id: string;
    name: string;
  };
  custom_variables: IuguCustomVariable[];
  updated_at: string;
}
