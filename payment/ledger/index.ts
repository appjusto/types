import { Timestamp } from '../../external/firebase';
import { IuguMarketplaceTransferResponse } from '../iugu';
import { AccountType } from '../tasks';

export type LedgerEntryOperation =
  // para entregadores
  | 'delivery' // entrega para entregadores
  | 'tip' // caixinha para entregadores
  | 'outsource-credit' // crédito para entregadores fora da rede
  // para consumidores
  | 'refund-credit' // crédito para consumidores em caso de reembolso parcial
  | 'delivery-credit' // crédito para consumidores em caso de diferença de delivery
  // para restaurantes
  | 'business-insurance' // pagamento de cobertura em caso de extravios, etc.
  | 'business-credit' // repasse de crédito de consumidores para restaurantes
  | 'business-subscription' // mensalidade
  // para appjusto
  | 'commission' // para cobrar comissão de pedidos pagos por VR;
  | 'business-refund-debit' // para cobrar créditos que foram dados para os consumidores em reembolsos parciais
  | 'business-coupon' // repasse de coupon de consumidores
  // geral
  | 'marketing-credit' // crédito de marketing para consumidores e entregadores
  | 'finders-fee' // crédito de comissão para consumidores e entregadores
  | 'services-debit' // serviços extras como flyers
  | 'balance-adjustment' // ajuste de erros de conciliação
  | 'same-owner-accounts' // transferência entre subcontas
  | 'others'; // outros casos de uso

export type LedgerEntryStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'canceled'
  | 'processing'
  | 'paid';

export interface LedgerEntry {
  orderId?: string | null;
  orderCode?: string | null;
  operation: LedgerEntryOperation;
  value: number;
  processingFee?: number;
  status: LedgerEntryStatus;
  from: {
    accountId: string | null;
    accountType: AccountType;
    token?: string | null;
  };
  to: {
    accountId: string | null;
    phoneNumber?: string;
    accountType: AccountType | 'consumer';
  };
  description?: string;
  transfer?: IuguMarketplaceTransferResponse;
  createdBy:
    | 'platform'
    | {
        id: string;
        email: string;
      };
  updatedBy?: {
    id: string;
    email: string;
  };
  notify?: boolean;
  taskName?: string | null;
  createdOn: Timestamp;
  updatedOn?: Timestamp;
  approvedOn?: Timestamp;
}
