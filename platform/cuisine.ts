export type CuisineName =
  | 'Açaí'
  | 'Africana'
  | 'Alemã'
  | 'Argentina'
  | 'Árabe'
  | 'Asiática'
  | 'Bebidas'
  | 'Brasileira'
  | 'Hambúrguer'
  | 'Cafeteria'
  | 'Carnes'
  | 'Colombiana'
  | 'Fit'
  | 'Chinesa'
  | 'Congelados'
  | 'Contemporânea'
  | 'Rápidas'
  | 'Sucos'
  | 'Conveniência'
  | 'Doces'
  | 'Espanhola'
  | 'Frangos'
  | 'Francesa'
  | 'Do Mar'
  | 'Indiana'
  | 'Italiana'
  | 'Japonesa'
  | 'Lanches'
  | 'Marmita'
  | 'Mediterrânea'
  | 'Mercado'
  | 'Mexicana'
  | 'Mineira'
  | 'Nordestina'
  | 'Padaria'
  | 'Pastel'
  | 'Peruana'
  | 'Pizza'
  | 'Portuguesa'
  | 'Panqueca'
  | 'Salgados'
  | 'Saudável'
  | 'Sorvetes'
  | 'Sopas'
  | 'Tailandesa'
  | 'Variada'
  | 'Vegana'
  | 'Vegetariana';

export interface Cuisine {
  name: CuisineName;
  imagePath: string;
  order?: number;
  enabled?: boolean;
}
