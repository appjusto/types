interface IuguCustomVariable {
  name: string;
  value: string;
}

export interface IuguCreateCustomerRequest {
  email: string;
  name: string;
  cpf_cnpj?: string;
  custom_variables?: IuguCustomVariable[];
}

export interface IuguCustomer {
  id: string;
  email: string;
  name: string;
  notes?: string;
  cpf_cnpj?: string;
  created_at: string;
  updated_at: string;
  custom_variables?: IuguCustomVariable[];
  proxy_payments_from_customer_id?: string;
}
