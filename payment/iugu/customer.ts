export interface IuguCreateCustomerRequest {
  email: string;
  name: string;
  cpf_cnpj?: string;
  custom_variables?: object[];
}

export interface IuguCustomer {
  id: string;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
  custom_variables?: object[];
}
