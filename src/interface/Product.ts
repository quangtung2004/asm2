export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  action: boolean;
}
export type Createproduct = {
  title: string;
  price: number;
  category: string;
  action: boolean;
};
