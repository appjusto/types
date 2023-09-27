export interface OrderItem {
  id: string;
  product: {
    id: string;
    name: string;
    price: number; // in cents
    categoryName: string;
    externalId?: string;
    imageUrl?: string | null;
  };
  quantity: number;
  notes?: string;
  complements?: OrderItemComplement[];
}

export interface OrderItemComplement {
  complementId: string;
  name: string;
  price: number;
  quantity: number;
  externalId?: string;
  group: {
    id: string;
    name: string;
    externalId?: string;
  };
}
