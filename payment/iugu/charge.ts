export interface IuguChargeResponse {
  message: string;
  errors: object;
  url: string;
  pdf: string;
  identification: string | null;
  invoice_id: string;
}
