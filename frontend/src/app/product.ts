import { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  expiration: string;
  amount: number;
  perishable: boolean;
}
