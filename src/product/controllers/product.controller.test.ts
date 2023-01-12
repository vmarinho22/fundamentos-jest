import ProductRepositoryInterface from '../interfaces/product.interface';
import Product from '../Product';
import ProductController from './product.controller';

const makeStu = () => {
  const mockRepository: jest.Mocked<ProductRepositoryInterface> = {
    findAll: jest.fn(),
    save: jest.fn(),
  }

  const stu = new ProductController(mockRepository);

  return {
    stu,
    mockRepository
  }
}

describe("Test Product Controller", () => {
  it("should be get all products", () => {
    const { stu, mockRepository } = makeStu();

    stu.findAll()
    expect(mockRepository.findAll).toBeCalledTimes(1);
  });

  it("should be save one product", () => {
    const { stu, mockRepository } = makeStu();
    const name: string = 'Product 1'
    const price: number = 12.5;

    stu.store(name, price);
    expect(mockRepository.save).toHaveBeenCalledWith(name, price);
  });
});
