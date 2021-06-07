export interface EmailTaskPayload {
  email: string;
  templateId: string;
  templateData?: object;
}
