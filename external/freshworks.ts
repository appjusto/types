export interface FreshworksTicket {
  unique_external_id: string;
  email: string;
  phone?: string;
  name: string;
  priority: number;
  subject: string;
  description_text: string;
}
