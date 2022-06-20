export type IuguCreditCardTransactionStatus = 'authorized';

export type IuguInvoiceStatus =
  | 'in_analysis'
  | 'pending'
  | 'paid'
  | 'partially_paid'
  | 'refunded'
  | 'partially_refunded'
  | 'expired'
  | 'authorized'
  | 'canceled'
  | 'in_protest'
  | 'chargeback';

// items
export interface IuguItem {
  description: string;
  quantity?: number;
  price_cents: number; // minimum 100
}
export interface IuguSplit {
  recipient_account_id: string;
  cents?: number;
  percent?: number;
}
export interface IuguCommissions {
  cents?: number;
  percent?: number;
  credit_card_cents?: number;
  credit_card_percent?: number;
  bank_slip_cents?: number;
  bank_slip_percent?: number;
  pix_cents?: number;
  pix_percent?: number;
}
// create invoice
export type IuguPayableWith = 'credit_card' | 'pix';
export interface IuguCustomVariable {
  name: string;
  value: string;
}
export interface IuguCreateInvoiceRequest {
  email: string; // E-mail do cliente
  cc_emails?: string; // Endereços de E-mail para cópia separados por ponto e vírgula.
  due_date: string; // Data do vencimento. (Formato: 'AAAA-MM-DD').
  ensure_workday_due_date: false; // Se true, garante que a data de vencimento seja apenas em dias de semana, e não em sábados ou domingos.
  items: IuguItem[]; // Itens da fatura. "price_cents" valor mínimo 100.
  notification_url?: string; // URL chamada para todas as notificações de Fatura, assim como os webhooks (Gatilhos) são chamados
  ignore_canceled_email?: boolean; // Desliga o e-mail de cancelamento de fatura
  fines: false; // Booleano para Habilitar ou Desabilitar multa por atraso de pagamento
  customer_id: string; // ID do Cliente
  ignore_due_email?: boolean; // Booleano que ignora o envio do e-mail de cobrança
  payable_with: IuguPayableWith; // Método de pagamento que será disponibilizado para esta Fatura ("all", "credit_card", "bank_slip" ou "pix"). Obs: Caso esta Fatura esteja atrelada à uma Assinatura, a prioridade é herdar o valor atribuído na Assinatura; caso esta esteja atribuído o valor 'all', o sistema considerará o 'payable_with' da Fatura; se não, o sistema considerará o 'payable_with' da Assinatura.
  custom_variables?: IuguCustomVariable[]; // Variáveis Personalizadas
  order_id?: string; // Número único que identifica o pedido de compra. Opcional, ajuda a evitar o pagamento da mesma fatura.
  external_reference?: string; // Informação de referência externa, possibilitando a realização de pesquisa.
  commissions?: IuguCommissions;
  splits?: IuguSplit[]; // Lista de splits a serém aplicado nas faturas pagas.
}

export interface IuguCreateInvoiceResponse {
  id: string;
  due_date: string; // AAAA-MM-DD
  currency: string;
  email: string;
  status: IuguInvoiceStatus;
  updated_at: string;
  ensure_workday_due_date: false;
  total_cents: number;
  secure_id: string;
  secure_url: string;
  customer_id: string;
  created_at: string;
  items: [
    {
      id: string;
      description: string;
      quantity?: number;
      price_cents: number; // minimum 100
    }
  ];
  notification_url?: string;
  custom_variables?: object[];
  commission_cents: number;
}
// capture invoice
export interface IuguInvoiceCaptureResponse {
  id: string;
  due_date: string;
  currency: string;
  discount_cents: null | number;
  email: string;
  items_total_cents: number;
  notification_url: string;
  return_url: string;
  status: IuguInvoiceStatus;
  tax_cents: null | number;
  updated_at: string;
  total_cents: number;
  paid_at: string;
  taxes_paid_cents: number;
  paid_cents: number;
  cc_emails: null | string;
  financial_return_date: string;
  payable_with: string;
  commission_cents: number;
  secure_id: string;
  secure_url: string;
  commission: string;
  customer_id: string;
  customer_ref: string;
  customer_name: string;
  financial_return_dates: [
    {
      installment: number;
      return_date: string;
      status: 'pending'; // ?
    }
  ];
  user_id: string;
  total: string;
  taxes_paid: string;
  fines_on_occurrence_day: string;
  total_on_occurrence_day: string;
  fines_on_occurrence_day_cents: number;
  total_on_occurrence_day_cents: number;
  advance_fee: null | number;
  paid: string;
  interest: null; // ?
  discount: null; // ?
  created_at: string;
  refundable: boolean;
  installments: string;
  transaction_number: number;
  created_at_iso: string;
  updated_at_iso: string;
  bank_slip: null; // ?
  items: [
    {
      id: string;
      description: string;
      price_cents: number;
      quantity: number;
      created_at: string;
      updated_at: string;
      price: string;
    }
  ];
  variables: [
    {
      id: string;
      variable: string;
      value: string;
    }
  ];
  custom_variables: [
    {
      id: string;
      variable: string;
      value: string;
    }
  ];
  logs: [];
  credit_card_transaction: null | {
    status: IuguCreditCardTransactionStatus;
    message: string;
    success: boolean;
    lr: string;
    reversible: boolean;
    token: string;
    brand: string;
    bin: string;
    last4: string;
    created_at: string;
    updated_at: string;
    authorized_at: string;
    captured_at: string;
    canceled_at: string;
  };
}
