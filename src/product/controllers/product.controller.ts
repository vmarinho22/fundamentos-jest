import ProductRepositoryInterface from "../interfaces/product.interface";
import Product from "../Product";

export default class ProductController {
  constructor(private readonly repository: ProductRepositoryInterface) {}

  findAll(): Product[] {
    return this.repository.findAll();
  }


  store(name: string, price: number) {
    return this.repository.save(name, price);
  }
}
