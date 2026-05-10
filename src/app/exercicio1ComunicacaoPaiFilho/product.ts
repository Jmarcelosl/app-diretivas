// Essa interface dita as regras de quais informações um produto deve ter
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}