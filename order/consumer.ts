export interface OrderConsumer {
  id: string;
  name?: string;
  cpf?: string;
  email?: string;
  notificationToken?: string | null;
  invoiceWithCPF?: boolean;
  wantToShareData?: boolean;
}
