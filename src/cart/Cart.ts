import { CartProtocol } from './interfaces/cart.protocol';
import Product from "../product/Product";

export type ItemCart = {
  product: Product;
  quantity: number;
}

export default class Cart implements CartProtocol<ItemCart> {
  private readonly _items: ItemCart[] = [];

  addItem(product: Product): void {
    const index = this._items.findIndex((item) => product.name === item.product.name);

    if (index !== -1) {
      this._items[index] = {
        ...this._items[index],
        quantity: this._items[index].quantity + 1,
      };

      return;
    }

    this._items.push({product, quantity: 1 });
  }

  removeItem(product: Product): void {
    if (this._items.length > 0) {
      
      const index = this._items.findIndex((item) => product === item.product);

      if (index) {
        this._items.splice(index, 1);
      }
    }
  }

  get items(): readonly ItemCart[] {
    return this._items;
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
