export interface UpdateDocumentTaskPayload {
  path: string;
  update: { [field: string]: any };
  constraints?: { [field: string]: any };
}
