import Product from "../product/Product";

export default class Cart {
  private readonly _items: Product[] = [];

  addItem(item: Product): void {
    this._items.push(item);
  }

  removeItem(item: Product): void {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }

  get items(): readonly Product[] {
    return this._items;
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
