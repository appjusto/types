export interface OrderConsumer {
  id: string;
  name?: string;
  cpf?: string;
  email?: string;
  phone?: string;
  notificationToken?: string | null;
  invoiceWithCPF?: boolean;
  wantToShareData?: boolean;
}
