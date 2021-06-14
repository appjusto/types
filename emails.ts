export interface EmailTaskPayloadFrom {
  name: string;
  email: string;
}

export interface EmailTaskPayload {
  email: string;
  templateId: string;
  from?: EmailTaskPayloadFrom;
  templateData?: object;
}
