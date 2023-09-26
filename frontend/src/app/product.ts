import { Category } from "./category";

export interface Product {
  id?: number;
  name: string;
  category: Category;
  price: number;
  expiration: string;
  amount: number;
  perishable: boolean;
}

export interface ProductPost {
  name?: string | null | undefined;
  category_id?: number | null | undefined;
  price?: number | null | undefined;
  expiration?: string | null | undefined;
  amount?: number | null | undefined;
  perishable?: boolean | null | undefined;
}
