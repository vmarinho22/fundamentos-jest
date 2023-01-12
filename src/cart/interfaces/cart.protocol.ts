import Product from "../../product/Product";

export interface CartProtocol<T> {
  addItem(item: Product): void;
  removeItem(item: Product): void;
  get items(): readonly T[];
  total(): number;
  isEmpty(): boolean;
  clear(): void;
}
