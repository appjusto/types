export interface Business {
  name: string;
  description: string;
  minimumOrder: number;
  businessAddress: {
    address: string;
    number: string;
    cep: number;
    city: string;
    state: string;
  }
  cnpj: number;
  status: 'open' | 'closed';
  type: 'restaurant';
}
