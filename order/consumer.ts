import { InstallReferrer, LatLng } from '..';

export interface OrderConsumer {
  id: string;
  name?: string;
  cpf?: string;
  email?: string;
  phone?: string;
  notificationToken?: string | null;
  invoiceWithCPF?: boolean;
  coordinates?: LatLng | null;
  appInstallationId?: string | null;
  installReferrer?: InstallReferrer | null;
  totalOrders?: number;
}
